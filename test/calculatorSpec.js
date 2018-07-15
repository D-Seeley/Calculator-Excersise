const expect = require('chai').expect;
const Calculator = require('../calculator.js');

const calculator = new Calculator()

beforeEach(function() { 
    calculator.reset();
    
});

describe("Calculator", ()=> {
    it("is an object", ()=> {
        expect(calculator).be.an('object');
    });

    it("can hold a value", ()=> {
        expect(calculator.total).be.an('number');
        expect(calculator.total).to.equal(0);
    });

    it("can reset it's internal value", ()=> {
        expect(calculator.reset).be.a('function');

        calculator.reset();
        calculator.add(5);
        expect(calculator.total).to.equal(5);
    });

    it("can add a number to it's value", ()=> {
        expect(calculator.add).be.a('function');
        
        calculator.add(5);
       
        expect(calculator.total).to.equal(5);
        
        calculator.add(5);
        expect(calculator.total).to.equal(10);

        calculator.reset();
        calculator.add(5);
        expect(calculator.total).to.equal(5);
    });

    it("can subtract from it's value", ()=> {
        expect(calculator.subtract).be.a('function');
        
        calculator.add(5);
        calculator.subtract(2)
       
        expect(calculator.total).to.equal(3);
        
        calculator.subtract(5);
        expect(calculator.total).to.equal(-2);
    });

    it("can multiply and retain to it's value", ()=> {
        expect(calculator.multiply).be.a('function');

        calculator.add(5);
        calculator.multiply(125);
       
        expect(calculator.total).to.equal(625);
    });
    
});