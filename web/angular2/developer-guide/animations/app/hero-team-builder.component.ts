import { Component } from '@angular/core';

import { Heroes } from './hero.service';
import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroListInlineStylesComponent } from './hero-list-inline-styles.component';

@Component({
  moduleId: module.id,
  selector: 'hero-team-builder',
  templateUrl: 'hero-team-builder.component.html',
  styleUrls: [`hero-team-builder.component.css`],
  directives: [
    HeroListBasicComponent,
    HeroListInlineStylesComponent
  ],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) {}
}
