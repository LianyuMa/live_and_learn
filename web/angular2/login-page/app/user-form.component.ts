import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, Response } from '@angular/http';

import { User } from './user';
// import { UserService } from './user.service';

@Component({
  selector: 'user-form',
  templateUrl: 'app/user-form.component.html',
})
export class UserFormComponent {

  // model = new User('Jon', 'Snow', 'snowj@hbo.com', 'jonsnow');

  model = new User('', '', '', '');

  data: Object;

  constructor(public http: Http) {}
  // constructor(private userService: UserService) {}

  submitted = false;

  onSubmit() { this.submitted = true }

  active = true;

  newUser() {
    this.model = new User('Jon', 'Snow', 'snowj@hbo.com', 'jonsnow');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  register(model) {
    const firstname = model.firstname;
    const lastname = model.lastname;
    const email = model.email;
    const password = model.password;
    this.http.post('http://test-api.evermight.com/register.php', JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    })).subscribe((res: Response) => {
      this.data = res.json();
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
