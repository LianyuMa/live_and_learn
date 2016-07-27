import { Component } from '@angular/core';
import { Ng2Bootstrap } from './ng2-bootstrap.component.html';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><ng2-bootstrap></ng2-bootstrap>',
    directive: [Ng2Bootstrap]
})
export class AppComponent { }
