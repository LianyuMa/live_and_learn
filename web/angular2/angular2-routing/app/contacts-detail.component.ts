import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>{{contact.name}}</h2>

    <address>
      <span>{{contact.street}}</span>
      <span>{{contact.zip}}</span>
      <span>{{contact.city}}</span>
      <span>{{contact.counrty}}</span>
    </address>
  `
})
export class ContactsDetailComponent {
  constructor(private route: ActivatedRoute) {
    
  }
}
