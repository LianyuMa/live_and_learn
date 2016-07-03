import { Component } from '@angular/core';

import { Car as CarNoDi } from './car-no-di';
import { simpleCar, superCar, testCar } from './car-creations';
import { CarFactory } from './car-factory';
import { useInjector } from './car-injector';
import { Car, Engine, Tires } from './car';

@Component({
  selector: 'my-car',
  template: `
    <h2>Cars</h2>
    <div id="nodi">{{noDiCar.drive()}}</div>
    <div id="simple">{{simpleCar.drive()}}</div>
    <div id="super">{{superCar.drive()}}</div>
    <div id="test">{{testCar.drive()}}</div>
    <div id="factory">{{factoryCar.drive()}}</div>
    <div id="injector">{{injectorCar.drive()}}</div>
  `,
  providers: [Car, Engine, Tires]
})
export class CarComponent {
  noDiCar = new CarNoDi;
  simpleCar = simpleCar();
  superCar = superCar();
  testCar = testCar();
  factoryCar = (new CarFactory).createCar();
  injectorCar = useInjector();
}
