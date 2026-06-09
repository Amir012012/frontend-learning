class Car {
  constructor(brand, fuel = 100) {
    this.brand = brand;
    this.fuel = fuel;
    this.speed = 0;
    this.isStart = false;
  }

  start() {
    if (this.fuel < 0) {
      console.log("No Fuel!");
      return;
    }
    this.isStart = true;
    console.log(`${this.brand} Started🛞`);
  }

  accelerate() {
    if (this.isStart === false) {
      console.log("Start the car first!");
      return;
    }
    if (this.fuel <= 0) {
      console.log("Out of fuel!");
      return;
    }

    this.speed += 10;
    this.fuel -= 5;
    this.showStatus();
  }
  break() {
    this.speed -= 10;
    if (this.speed <= 0) this.speed = 0;
    this.showStatus();
  }

  stop() {
    this.speed = 0;
    this.isStart = false;
    console.log(`${this.brand} Stopped🛑`);
  }

  refuel(amount) {
    this.fuel += amount;
    console.log(`⛽Refuel:+${amount} liter`);
    this.showStatus();
  }

  showStatus() {
    console.log(`
        Brand:${this.brand}||Speed:${this.speed}||Fuel:${this.fuel}`);
  }
}

const car1 = new Car("BMW");
const car2 = new Car("TOYOTA");

car2.refuel(120);
car1.start();
car1.break();
