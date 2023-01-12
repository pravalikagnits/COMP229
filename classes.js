class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    getString() {
        return '(' + this.wheels + ')';
    }
}
class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }
    getString() {
        return super.getString() + ' colored: ' + this.color;
    }
}
let car = new Car('blue');
console.log(car.getString());
console.log(`is car instanceof Car ${car instanceof Car} `);
console.log(`is car instanceof Vehicle ${car instanceof Vehicle} `);
