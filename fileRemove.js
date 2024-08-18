const fs = require('fs')

fs.unlink('text.txt', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('file deleted successfull')
    }
})