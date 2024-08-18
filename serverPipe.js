const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const readable = fs.createReadStream('text.txt')
    readable.pipe(res)
}).listen(3002)