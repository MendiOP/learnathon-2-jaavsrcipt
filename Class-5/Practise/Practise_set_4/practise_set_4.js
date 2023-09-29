// Abstract Factory
class VehicleFactory {
    createVehicle() {
      throw new Error("This method should be overridden by concrete factories");
    }
  }
  
  // Concrete Factory for Cars
  class CarFactory extends VehicleFactory {
    createVehicle(options) {
      return new Car(options);
    }
  }
  
  // Concrete Factory for Motorcycles
  class MotorcycleFactory extends VehicleFactory {
    createVehicle(options) {
      return new Motorcycle(options);
    }
  }
  
  // Abstract Product
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
  
    drive() {
      console.log("Driving a " + this.type);
    }
  }
  
  // Concrete Product - Car
  class Car extends Vehicle {
    constructor(options) {
      super("car");
      this.color = options && options.color ? options.color : "white";
    }
  
    displayInfo() {
      console.log("This is a " + this.color + " car.");
    }
  }
  
  // Concrete Product - Motorcycle
  class Motorcycle extends Vehicle {
    constructor(options) {
      super("motorcycle");
      this.engineType = options && options.engineType ? options.engineType : "standard";
    }
  
    displayInfo() {
      console.log("This motorcycle has a " + this.engineType + " engine.");
    }
  }
  


  
  const carFactory = new CarFactory();
  const motorcycleFactory = new MotorcycleFactory();
  
  const car = carFactory.createVehicle({ color: "blue" });
  const motorcycle = motorcycleFactory.createVehicle({ engineType: "sport" });
  
  car.drive();
  car.displayInfo();
  
  motorcycle.drive();
  motorcycle.displayInfo();
  