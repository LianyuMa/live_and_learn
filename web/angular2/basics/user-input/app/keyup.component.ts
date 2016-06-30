import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent {
  values = '';

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' |';
  }
}
