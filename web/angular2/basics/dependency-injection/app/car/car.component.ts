import { Component } from '@angular/core';

import { Car as CarNoDi } from './car-no-di';
import { simpleCar, superCar } from './car-creations';

@Component({
  selector: 'my-car',
  template: `
    <h2>Cars</h2>
    <div id="nodi">{{noDiCar.drive()}}</div>
    <div id="simple">{{simpleCar.drive()}}</div>
    <div id="super">{{superCar.drive()}}</div>
  `
})
export class CarComponent {
  noDiCar = new CarNoDi;
  simpleCar = simpleCar();
  superCar = superCar();
}
