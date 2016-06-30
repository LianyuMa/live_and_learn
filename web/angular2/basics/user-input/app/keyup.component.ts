import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <h2>Give me some keys!</h2>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
    <h2>Type away! Press [enter] when done</h2>
    <input #box1 (keyup.enter)="values1=box1.value">
    <p>{{values1}}</p>
    <h2>Type away! Press [enter] or click elsewhere when done.</h2>
    <input #box2
      (keyup.enter)="values2=box2.value"
      (blur)="values2=box2.value">
    <p>{{values2}}</p>
  `
})
export class KeyUpComponent {
  values = '';
  values1 = '';
  values2 = '';

  onKey(value:string) {
    this.values += value + ' |';
  }
}
