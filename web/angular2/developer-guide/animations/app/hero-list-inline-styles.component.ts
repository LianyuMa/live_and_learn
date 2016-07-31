import { Component, Input, trigger, style, transition, animate } from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-list-inline-styles',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          @heroState="hero.state"
          (click)="hero.toggleState()">
          {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css'],
  animations: [
    trigger('heroState', [
      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ])
    ])
  ]
})
export class HeroListInlineStylesComponent {
  @Input() heroes: Heroes;
}
