class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Vehicle: ${this.year}${this.make}${this.model}`);
    }

    calculateMileage(distance, fuel) {
        const mileage = distance / fuel;
        console.log(`Mileage: ${mileage} miles per liter`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, engineDisplacement) {
        super(make, model, year);
        this.engineDisplacement = engineDisplacement;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Engine Displacement: ${this.engineDisplacement} cc`);
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Doors: ${this.doors}`);
    }
}

const motorcycle = new Motorcycle("Neo", 2020, 500, 700);
motorcycle.displayDetails();
motorcycle.calculateMileage(180, 10);

const car = new Car("Swift", 2021, 3, 2);
car.displayDetails();
car.calculateMileage(310, 12);

