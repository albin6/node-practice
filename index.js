const shop = require('./shop')

const orderOne = new shop()

orderOne.on('order', () => {
    console.log('order recieved')
})

orderOne.order()

orderOne.displayOrderCount()