import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ContactStore, Contact as ContactModel} from './contact-store';

@Component({
  selector: 'contact',
  templateUrl: 'app/contact.html',
  styleUrls: ['app/contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class Contact {
  @Input()
  contact: ContactModel;

  constructor(private store: ContactStore) { }

  removeContact(contact) {
    this.store.removeContact(contact);
  }

  starContact(contact) {
    this.store.starContact(contact);
  }
}
