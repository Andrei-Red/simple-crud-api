const Router = require("./Router/Router");
const { REQ_PERSON, ERROR_MESSAGE_INVALID_DATA } = require("./const/consts");
const db = require("../db");
const findPersonById = require('./utils/findPersonById')

const router = new Router();

router.get(REQ_PERSON, (req, res) => {
    if(req.personId) {
        let request = findPersonById(db, req.personId)
        res.statusCode = request ? 200 : 400
        res.send(request ? request: ERROR_MESSAGE_INVALID_DATA);
    } else {
        res.statusCode = 200
        res.send(db);
    }
});



router.post(REQ_PERSON, (req, res) => {
    console.log('req.body', req.body)
    db.push(req.body)
    res.send(db);
});

module.exports = router;
