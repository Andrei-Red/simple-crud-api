const Router = require("./Router/Router");
const { REQ_PERSON } = require("./const/consts");
const db = require("../db");

const router = new Router();

router.get(REQ_PERSON, (req, res) => {
    console.log('req.person.id', req.personId)
    if(req.personId) {
        res.send(req.personId);
    } else {
        res.send(db);
    }
});



router.post(REQ_PERSON, (req, res) => {
    console.log('req.body', req.body)
    db.push(req.body)
    res.send(db);
});

module.exports = router;
