import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>{{contact.name}}</h2>
  `
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {

  }

  ngOnInit() {
    this.contactsService.getContacts(this.route.snapshot.params.id).subscribe(contact => this.contact = contact);    
  }
}
