const fs = require('fs')

const number = 5

for (let i = 1; i <= 10; i++) {
    const result = `${i} x ${number} = ${i*number}\n`
    fs.appendFileSync('multiplicationTable.txt', result)
}