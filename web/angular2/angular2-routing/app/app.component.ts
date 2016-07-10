import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 Routing</h1><contacts-list></contacts-list><contacts-detail></contacts-detail>',
    directives: [ContactsListComponent, ContactsDetailComponent]
})
export class AppComponent { }
