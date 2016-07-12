export class ContactsService {
  contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3}
  ];

  getContacts() {
    return this.contacts;
  }

  getContact(id: any) {
    return this.contacts.find(contact => contact.id = id);
  }
}
