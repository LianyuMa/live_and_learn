import { Component } from '@angular/core';

@Component({
  selector: 'contacts-list',
  template:`
    <h2>Contacts</h2>
    <ul>
      <li *ngFor="let contact of contacts | async">
        {{contact.name}}
      </li>
    </ul>
  `
})
export class ContactsListComponent { }
