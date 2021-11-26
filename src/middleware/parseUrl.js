const parseUrl = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl)

    const arrUrl = parsedUrl.pathname.split('/')
    const firstUrlParams = arrUrl[1]
    const secondUrlParams = arrUrl[2]

    if (firstUrlParams === 'person') {
        req.pathname = ['/person']
        req.personId = secondUrlParams ? secondUrlParams : null
    }
};

module.exports = parseUrl;
