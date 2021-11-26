const {ERROR_MESSAGE_NOT_EXISTING_RESOURCE} =require('../const/consts')

const handlerOtherUrls = (req, res) => {
    if(!req.pathname) {
        res.statusCode = 404;
        res.send(ERROR_MESSAGE_NOT_EXISTING_RESOURCE);
    }
}

module.exports = handlerOtherUrls