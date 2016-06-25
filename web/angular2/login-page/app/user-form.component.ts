import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
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

  clearForm(model) {
    this.model = new User('', '', '', '');
  }

  private authorized: Object;

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  register(model) {
    const firstname = model.firstname;
    const lastname = model.lastname;
    const email = model.email;
    const password = model.password;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const creds = `firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&appkey=12`;

    // let options = new RequestOptions({ headers: headers });

    this.http.post('http://test-api.evermight.com/register.php', creds, { headers })
      .subscribe(
        data => console.log(data),
        err => console.warn(err)
      );
  }

  login(model) {
    const email = model.email;
    const password = model.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const creds = `email=${email}&password=${password}&appkey=12`;
    this.http.post('http://test-api.evermight.com/login.php', creds, { headers })
      .subscribe(
        data => { console.log(data); },
        err => { this.authorized = err._body; }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
