import { Component, Inject } from '@angular/core';

import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';
import { ProvidersComponent } from './providers.component';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    template: `
      <h1>Dependency Injection</h1>
      <my-car></my-car>
      <h2>User</h2>
      <p id="user">
        {{userInfo}}
        <button (click)='nextUser()'>Next User</button>
      <p>
      <my-heroes id="authorized" *ngIf="isAuthorized"></my-heroes>
      <my-heroes id="unauthorized" *ngIf="!isAuthorized"></my-heroes>
    `,
    directives: [CarComponent, HeroesComponent, ProvidersComponent],
    providers: [Logger, UserService]
})
export class AppComponent {
  constructor(private userService: UserService) { }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }
  get user() { return this.userService.user; }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
      `${this.isAuthorized ? '' : 'not'} authorized.`;
  }
}
