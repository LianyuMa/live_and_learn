import { Component, Inject } from '@angular/core';

import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes.component';

import { APP_CONFIG, AppConfig, HERO_DI_CONFIG } from './app.config';
import { Logger } from './logger.service';

import { ProvidersComponent } from './providers.component';
import { UserService } from './user.service';
import { TestComponent } from './test.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <my-car></my-car>
      <my-tests></my-tests>
      <h2>User</h2>
      <p id="user">
        {{userInfo}}
        <button (click)='nextUser()'>Next User</button>
      <p>
      <my-heroes id="authorized" *ngIf="isAuthorized"></my-heroes>
      <my-heroes id="unauthorized" *ngIf="!isAuthorized"></my-heroes>
    `,
    directives: [CarComponent, HeroesComponent, ProvidersComponent, TestComponent],
    // Can't use interface as provider token
    providers: [Logger, UserService, { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})
export class AppComponent {
  title: string;

  // Can't inject using the interface as the parameter type
  constructor(@Inject(APP_CONFIG) config: AppConfig, private userService: UserService) {
    this.title = config.title;
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }
  get user() { return this.userService.user; }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
      `${this.isAuthorized ? '' : 'not'} authorized.`;
  }
}
