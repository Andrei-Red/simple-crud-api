const parseUrl = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl)
    const cleanUrl = parsedUrl.pathname.match(/\/person/g)
    const id = parsedUrl.pathname.slice(8)

    req.pathname = cleanUrl
    req.personId = id
};

module.exports = parseUrl;
