require("dotenv").config();

const Server = require("./src/Server/Server");
const Router = require("./src/Router/Router");
const { REQ_PERSON } = require("./src/const/consts");
const PORT = process.env.PORT || 3000;

const server = new Server();
const router = new Router();

router.get(REQ_PERSON, (req, res) => {
  res.end("GET WORK");
});


server.addRouter(router)

server.listen(PORT, () => {
  console.log(`Server stared on PORT ${PORT}`);
});
