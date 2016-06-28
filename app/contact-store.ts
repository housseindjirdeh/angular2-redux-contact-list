export class Contact {
  name: String;
  star: boolean = false; 
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

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].star = !this.contacts[index].star;
  }
}