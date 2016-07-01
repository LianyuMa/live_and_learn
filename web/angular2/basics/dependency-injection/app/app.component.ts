import { Component } from '@angular/core';

import { CarComponent } from './car/car.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Dependency Injection</h1>
      <my-car></my-car>
    `,
    directives: [CarComponent]
})
export class AppComponent { }
