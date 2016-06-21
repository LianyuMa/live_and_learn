import { Component } from '@angular/core';
import { UserFormComponent } from './user-form.component';

@Component({
  selector: 'my-app',
  template: '<user-form></user-form>',
  directives: [UserFormComponent],
})
export class AppComponent { }
