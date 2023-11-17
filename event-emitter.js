const EventEmitter = require('events');

const myEvent = new EventEmitter();

// listener

myEvent.on('birthday', () => {
    console.log(('Happy Birthday To You!'))
})

myEvent.on('birthday', (gift) => {
    console.log(`I will send you a ${gift}`)
})

myEvent.emit('birthday', 'Watch')