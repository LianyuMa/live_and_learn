import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

@Component({
  selector: 'contacts-list',
  template:`
    <h2>Contacts</h2>
    <ul>
      <li *ngFor="let contact of contacts | async">
        <a [routerLink]="['/contacts', contact.id]">
          {{contact.name}}
        </a>
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent { }
