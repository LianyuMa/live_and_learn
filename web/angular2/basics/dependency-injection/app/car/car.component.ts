import { Component } from '@angular/core';

import { Car as CarNoDi } from './car-no-di';

@Component({
  selector: 'my-car',
  template: `
    <h2>Cars</h2>
    <div id="nodi">{{noDiCar.drive()}}</div>
  `
})
export class CarComponent {
  noDiCar = new CarNoDi;
}
