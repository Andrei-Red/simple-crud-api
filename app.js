require("dotenv").config();

const Server = require("./src/Server/Server");
const router = require("./src/person-pouter");
const {handlerOtherUrls, parseUrl, parseJson} = require('./src/middleware')

const PORT = process.env.PORT || 3000;


const server = new Server();
server.use(parseJson)
server.use(parseUrl(`http://localhost:${PORT}/`))
server.use(handlerOtherUrls)
server.addRouter(router)

server.listen(PORT, () => {
  console.log(`Server stared on PORT ${PORT}`);
});


