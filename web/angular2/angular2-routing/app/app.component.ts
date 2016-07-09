import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list.component'

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 Routing</h1><contacts-list></contacts-list>',
    directives: [ContactsListComponent]
})
export class AppComponent { }
