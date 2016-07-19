import { Component, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-list-multistep',
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
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transition: 'translateX(0)', offset: 0}),
          style({opacity: 1, transition: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transition: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HeroListMultistepComponent {
  @Input() heroes: Heroes;
}
