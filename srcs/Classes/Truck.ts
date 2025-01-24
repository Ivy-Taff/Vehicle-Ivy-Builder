// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;

  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length i == 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel(),];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {

    // TODO: Get the make an model of the vehicle if it exists
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
    // TODO: If it is, log that the vehicle is being towed
    console.log(`Towing ${vehicleDetails}...`);
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  } else {
    console.log(`${vehicleDetails} is too heavy to tow.`);
  }
}
}
  // TODO: Override the printDetails method from the Vehicle class
  printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails(); // Call the parent class's printDetails method
    // TODO: The method should log the details of the Truck
      console.log(`Truck Details:
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    VIN: ${this.vin}
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}
    Weight: ${this.weight} kg
    Top Speed: ${this.topSpeed} km/h
    Color: ${this.color}
    Towing Capacity: ${this.towingCapacity} kg
    Wheels: ${this.wheels.length} wheels`);
}
}

// Export the Truck class as the default export
export default Truck;
