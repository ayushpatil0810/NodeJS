const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello, ${username}`)
})

eventEmitter.on('greet', (username) => {
    console.log(`Namaste, ${username}`)
})

eventEmitter.once('push-notify', () => {
    console.log("This event will run only once.")
}) //only executes once


// Emit the event
eventEmitter.emit('greet', "ayush")
// eventEmitter.emit('greet', "chai")
// eventEmitter.emit('push-notify')
// eventEmitter.emit('push-notify')



const myListner = () => console.log("I am a test Listner.")
eventEmitter.on("test", myListner)

eventEmitter.emit('test')
eventEmitter.removeListener('test', myListner) // removes the listener
eventEmitter.emit('test') // won't work because the listener is removed


// console.log(eventEmitter.listeners('greet')) // 2