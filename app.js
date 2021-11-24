require('dotenv').config()
const http = require("http");

const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
    res.end('OK')
}).listen(PORT, () => {
    console.log(`Server stared on PORT ${PORT}`)
})