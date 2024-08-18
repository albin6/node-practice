const fs = require('fs')

fs.writeFile('text.txt', 'This is the content of text.txt file.', (err, data) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log('file created and writed successfully')
    }
})