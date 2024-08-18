const fs = require('fs')

const readableStream = fs.createReadStream('text.txt')

readableStream.close()

readableStream.on('close', () => {
    console.log('close handler')
})

setImmediate(() => console.log('setImmediate'))

setTimeout(() => console.log('setTimeout'), 0)