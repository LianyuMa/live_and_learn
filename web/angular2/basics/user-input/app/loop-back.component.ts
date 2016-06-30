import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <h2>keyup loop-back component</h2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
