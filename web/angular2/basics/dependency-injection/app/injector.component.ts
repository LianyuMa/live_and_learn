import { Component, Injector } from '@angular/core';

import { Car, Engine, Tires } from './car/car';
import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';
import { heroServiceProvider } from './heroes/hero.service.provider';
import { Logger } from './logger.service';

@Component({
  selector: 'my-injectors',
  template: `
    <h2>Other Injections</h2>
    <div id="car">{{car.drive()}}</div>
    <div id="hero">{{hero.name}}</div>
    <div id="rodent">{{rodent}}</div>
  `,
  providers: [Car, Engine, Tires, heroServiceProvider, Logger]
})
export class InjectorComponent {
  car: Car = this.injector.get(Car);

  heroService: HeroService = this.injector.get(HeroService);
  hero: Hero = this.heroService.getHeroes()[0];

  constructor(private injector: Injector) { }
  // We can call get with a second parameter (the value to return if the service is not found)
  // instead, which we do in one case to retrieve a service (ROUS) that isn't registered with this or any ancestor injector.
  get rodent() {
    let rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
    return this.injector.get(ROUS, rousDontExist);
  }
}

class ROUS { }
