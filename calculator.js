class Calculator {
    constructor () {
        this.total = 0;
        this.reset = () =>  this.total = 0;
        this.add = (num) => this.total += num;
        this.subtract = (num) => this.total -= num;
        this.multiply = (num) => this.total *= num;
    }
}

module.exports = Calculator;