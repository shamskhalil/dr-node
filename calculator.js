const { EventEmitter } = require('events');

class Calculator extends EventEmitter {
    constructor() {
        super();
        this.random();
    }

    add(a, b) {
        this.emit('addition', a + b);
    }

    subtract(a, b) {
        this.emit('subtraction', a - b);
    }

    multiply(a, b) {
        this.emit('multiplication', a * b);
    }

    divide(a, b) {
        this.emit('division', a / b);
    }

    random() {
        setInterval(() => {
            this.emit('random', Math.floor(Math.random() * 10000000));
        }, 1000);
    }
}

module.exports = Calculator;