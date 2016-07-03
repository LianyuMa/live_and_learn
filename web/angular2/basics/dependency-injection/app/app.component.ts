import { Component, Inject } from '@angular/core';

import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';

@Component({
    selector: 'my-app',
    template: `
      <h1>Dependency Injection</h1>
      <my-car></my-car>
      <my-heroes></my-heroes>
    `,
    directives: [CarComponent, HeroesComponent],
    providers: [Logger]
})
export class AppComponent { }
