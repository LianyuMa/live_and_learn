import { Component } from '@angular/core';

import { Heroes } from './hero.service';
import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroListInlineStylesComponent } from './hero-list-inline-styles.component';
import { HeroListCombinedTransitionsComponent } from './hero-list-combined-transitions.component';
import { HeroListTwowayComponent } from './hero-list-twoway.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListEnterLeaveStatesComponent } from './hero-list-enter-leave-states.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
import { HeroListTimingsComponent } from './hero-list-timings.component';
import { HeroListMultistepComponent } from './hero-list-multistep.component';

@Component({
  moduleId: module.id,
  selector: 'hero-team-builder',
  templateUrl: 'hero-team-builder.component.html',
  styleUrls: [`hero-team-builder.component.css`],
  directives: [
    HeroListBasicComponent,
    HeroListInlineStylesComponent,
    HeroListCombinedTransitionsComponent,
    HeroListTwowayComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStatesComponent,
    HeroListAutoComponent,
    HeroListTimingsComponent,
    HeroListMultistepComponent
  ],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) {}
}
