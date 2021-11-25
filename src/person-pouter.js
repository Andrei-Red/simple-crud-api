const { v4 } = require("uuid");

const Router = require("./Router/Router");
const { REQ_PERSON, ERROR_MESSAGE_INVALID_DATA, ERROR_MESSAGE_INVALID_BODY } = require("./const/consts");
const db = require("../db");
const findPersonById = require("./utils/findPersonById");
const checkRequiredFields = require("./utils/checkRequiredFields");

const router = new Router();

router.get(REQ_PERSON, (req, res) => {
  if (req.personId) {
    let person = findPersonById(db, req.personId);
    res.statusCode = person ? 200 : 400;
    res.send(person ? person : ERROR_MESSAGE_INVALID_DATA);
  } else {
    res.statusCode = 200;
    res.send(db);
  }
});

router.post(REQ_PERSON, (req, res) => {
  // console.log("req.body", req.body);

  if (checkRequiredFields(req.body)) {
    res.statusCode = 201;
    req.body.id = v4();
    db.push(req.body);
    res.send(req.body);
  } else {
      res.statusCode = 400;
      res.send(ERROR_MESSAGE_INVALID_BODY);
  }
});

module.exports = router;
