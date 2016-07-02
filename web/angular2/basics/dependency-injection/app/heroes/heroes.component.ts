import { Component } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
    <h2>Heroes</h2>
    <hero-list></hero-list>
  `,
  providers: [HeroService],
  directives: [HeroListComponent]
})

export class HeroesComponent { }
