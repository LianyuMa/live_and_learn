import { Component } from '@angular/core';

import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component'
import { LoopbackComponent } from './loop-back.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ClickMeComponent, KeyUpComponent, LoopbackComponent]
})
export class AppComponent {
  title = 'User Input';
}
