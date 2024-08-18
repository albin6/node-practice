const fs = require('fs').promises

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })


async function readFile() {
    try {
        const cont1 = await fs.readFile('text.txt', 'utf-8')
        const cont2 = await fs.readFile('text1.txt', 'utf-8')

        const res = cont1 + '\n' + cont2

        await fs.writeFile('result.txt', res, 'utf-8')
        console.log('content writed successfully')
    } catch (error) {
        console.log(error)
    }
}

readFile()