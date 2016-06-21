import { Component } from '@angular/core';
import { NgForm } from '@angular/common';

import { User } from './user';

@Component({
  selector: 'user-form',
  templateUrl: 'app/user-form.component.html',
})
export class UserFormComponent {

  model = new User('Jon', 'Snow', 'snowj@hbo.com', 'jonsnow');

  submitted = false;

  onSubmit() { this.submitted = true }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
