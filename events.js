const events = require('events')

const emitter = new events()

emitter.on('order-food', () => {
    console.log('food order successfull')
})

emitter.emit('order-food')
