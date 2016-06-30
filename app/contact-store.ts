import Immutable = require('immutable');

export class Contact {
  name: String;
  star: boolean;
}

export class ContactStore {
  contacts = Immutable.List(Contact);

  addContact(newContact: String) {
    this.contacts = this.contacts.push({
      name: newContact,
      star: false
    });
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts = this.contacts.delete(index);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts = (<any>this.contacts).update(index, (contact) => {
      return {
        name: contact.name,
        star: !contact.star
      };
    });
  }
}