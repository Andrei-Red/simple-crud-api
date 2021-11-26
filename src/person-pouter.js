const { v4 } = require("uuid");

const Router = require("./Router/Router");
const {
  REQ_PERSON,
  ERROR_MESSAGE_INVALID_DATA,
  ERROR_MESSAGE_INVALID_BODY,
  ERROR_MESSAGE_INVALID_ID,
  ERROR_MESSAGE_PERSON_NOT_FOUND,
} = require("./const/consts");
const db = require("../db");
const findPersonById = require("./utils/findPersonById");
const checkRequiredFields = require("./utils/checkRequiredFields");
const updatePerson = require("./utils/updatePerson");
const deletePerson = require("./utils/deletePerson");
const isValidPersonId = require("./utils/isValidPersonId");

const router = new Router();

router.get(REQ_PERSON, (req, res) => {
  try {
    if (req.personId) {
      if (isValidPersonId(req.personId)) {
        let person = findPersonById(db, req.personId);
        res.statusCode = person ? 200 : 404;
        res.send(person ? person : ERROR_MESSAGE_PERSON_NOT_FOUND);
      } else {
        res.statusCode = 400;
        res.send(ERROR_MESSAGE_INVALID_ID);
      }
    } else {
      res.statusCode = 200;
      res.send(db);
    }
  } catch (e) {
    console.log("error", e);
    res.statusCode = 500;
    res.send();
  }
});

router.post(REQ_PERSON, (req, res) => {
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

router.put(REQ_PERSON, (req, res) => {
  if (req.personId) {
    if (isValidPersonId(req.personId)) {
      const newPersonData = req.body;
      newPersonData.id = req.personId;

      const updatedPerson = updatePerson(db, newPersonData);
      res.statusCode = updatedPerson ? 200 : 404;
      res.send(updatedPerson ? updatedPerson : ERROR_MESSAGE_PERSON_NOT_FOUND);
    } else {
      res.statusCode = 400;
      res.send(ERROR_MESSAGE_INVALID_ID);
    }
  } else {
    res.statusCode = 400;
    res.send(ERROR_MESSAGE_INVALID_DATA);
  }
});

router.delete(REQ_PERSON, (req, res) => {
  if (req.personId) {
    if (isValidPersonId(req.personId)) {
      const isDeleted = deletePerson(db, req.personId);
      res.statusCode = isDeleted ? 204 : 404;
      res.send(isDeleted ? "" : ERROR_MESSAGE_PERSON_NOT_FOUND);
    } else {
      res.statusCode = 400;
      res.send(ERROR_MESSAGE_INVALID_DATA);
    }
  } else {
    res.statusCode = 400;
    res.send(ERROR_MESSAGE_INVALID_DATA);
  }
});

module.exports = router;
