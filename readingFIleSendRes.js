const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type' : "text/plain"})
            res.end('Internal Server Error')
        } else {
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            res.write(data)
            res.end()
        }
    })
}).listen(3002)