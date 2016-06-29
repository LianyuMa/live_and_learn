import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>My favourite hero is: {{myHero}}</h2>
      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          {{ hero }}
        </li>
      </ul>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['windstorm', 'Bombastro', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
