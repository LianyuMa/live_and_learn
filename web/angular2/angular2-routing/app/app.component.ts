import { Component } from '@angular/core';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';

@Component({
    selector: 'my-app',
    template: `<contacts-app><contacts-app>`,
    directives: [ContactsListComponent, ContactsDetailComponent]
})
export class AppComponent { }
