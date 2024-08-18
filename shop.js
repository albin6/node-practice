const eventEmitter = require('events')

class shopOrder extends eventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
    }

    order() {
        this.orderNumber++
        this.emit("order")
    }

    displayOrderCount() {
        console.log(`Current order count :${this.orderNumber}`)
    }
}

module.exports = shopOrder