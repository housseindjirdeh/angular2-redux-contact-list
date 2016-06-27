export class Contact {
  text: String;
}

export class ContactStore {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  addContact(newContact: String) {
    this.contacts.push({
      name: newContact
    });
  }
}