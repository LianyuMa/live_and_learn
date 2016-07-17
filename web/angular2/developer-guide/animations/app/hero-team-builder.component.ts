import { Component } from '@angular/core';

import { Heroes } from './hero.service';
import { HeroListBasicComponent } from './hero-list-basic.component';

@Component({
  selector: 'hero-team-builder',
  template: `
    <div class="buttons">
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addInactive()">Add inactive hero</button>
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addActive()">Add active</button>
      <button [disabled]="!heroes.canRemove()" (click)="heroes.remove()">Remove hero</button>
    </div>
    <div class="columns">
      <div class="column">
        <h4>Basic State</h4>
        <p>Switch between active/inactive on click.</p>
        <hero-list-basic [heroes]=heroes></hero-list-basic>
      </div>
    </div>
  `,
  styles: [`
    .buttons {
      text-align: center;
    }
  `],
  directives: [HeroListBasicComponent],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) {}
}
