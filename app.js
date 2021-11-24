require("dotenv").config();

const Server = require("./src/Server/Server");
const router = require("./src/person-pouter");
const parseJson = require('./src/parseJson')
const parseUrl = require('./src/parseUrl')
const PORT = process.env.PORT || 3000;

const server = new Server();
server.use(parseJson)
server.use(parseUrl(`http://localhost:${PORT}/`))
server.addRouter(router)

server.listen(PORT, () => {
  console.log(`Server stared on PORT ${PORT}`);
});
