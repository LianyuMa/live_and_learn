import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <h2>Give me some keys!</h2>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent {
  values = '';

  onKey(value:string) {
    this.values += value + ' |';
  }
}
