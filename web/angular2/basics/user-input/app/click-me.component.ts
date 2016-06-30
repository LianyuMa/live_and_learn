import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <h2>User Input Event</h2>
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
  `
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!'
  }
}
