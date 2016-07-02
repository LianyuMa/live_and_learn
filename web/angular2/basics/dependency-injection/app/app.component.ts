import { Component } from '@angular/core';

import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Dependency Injection</h1>
      <my-car></my-car>
      <my-heroes></my-heroes>
    `,
    directives: [CarComponent, HeroesComponent]
})
export class AppComponent { }
