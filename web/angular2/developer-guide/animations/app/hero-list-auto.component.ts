import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-list-auto',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          @shrinkOut="'in'">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
  @Input() heroes: Heroes;
}
