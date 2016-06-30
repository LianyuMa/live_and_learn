import { Component } from '@angular/core';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ClickMeComponent, KeyUpComponent]
})
export class AppComponent {
  title = 'User Input';
}
