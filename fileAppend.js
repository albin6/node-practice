const fs = require('fs')

fs.appendFile('text.txt', ' This content will be appended',(err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('content appended successfully')
    }
})