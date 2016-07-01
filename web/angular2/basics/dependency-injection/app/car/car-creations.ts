// Examples with car and engine variations

import { Car, Engine, Tires } from './car';

export function simpleCar() {
  // Simple car with 4 cyclinder and Flinstone tires.
  let car = new Car(new Engine(), new Tires());
  car.description = 'Simple';
  return car;
}

// for update creation code when Car has problem.
class Engine2 {
  constructor(public cylinders: number) { }
}

export function superCar() {
  // super car with 12 cylinders and Flintstone tires.
  let bigCylinders = 12;
  let car = new Car(new Engine2(bigCylinders), new Tires());
  car.description = 'Super';
  return car;
}
