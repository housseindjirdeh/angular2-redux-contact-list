import { Component } from '@angular/core';
import { ContactStore } from './contact-store';
import Contact from './contact';

@Component({
  selector: 'contact-list',
  templateUrl: 'app/contact-list.html',
  styleUrls: ['app/contact-list.css'],
  directives: [Contact]
})

export class ContactList {
  constructor(private store: ContactStore) { }

  addContact(contact) {
    this.store.addContact(contact);
  }

  removeContact(contact) {
    this.store.removeContact(contact);
  }

  starContact(contact) {
    this.store.starContact(contact);
  }
}
