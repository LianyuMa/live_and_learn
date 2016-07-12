import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
    selector: 'my-app',
    template: '<h1>Component Relative Paths</h1><contacts-header></contacts-header>',
    directives: [HeaderComponent]
})
export class AppComponent { }
