import { Component } from '@angular/core';
import { ContactStore } from './contact-store';

@Component({
  selector: 'contact-list',
  templateUrl: 'app/contact-list.html'
})

export class ContactList {
  store: ContactStore;

  constructor(store: ContactStore) {
    this.store = store;
  }

  addContact(contact) {
    this.store.addContact(contact);
  }
}
