export class Hero {
  id: number;
  name: string;
}
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" palceholder="name">
     </div>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  // hero = 'windstorm';
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
}
