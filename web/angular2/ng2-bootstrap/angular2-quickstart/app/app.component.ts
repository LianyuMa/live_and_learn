import { Component } from '@angular/core';
import { Ng2BootstrapComponent } from './ng2-bootstrap.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><ng2-bootstrap></ng2-bootstrap>',
    directives: [Ng2BootstrapComponent]
})
export class AppComponent { }
