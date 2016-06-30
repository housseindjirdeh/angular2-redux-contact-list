import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { ContactStore, Contact as ContactModel} from './contact-store';
import { removeContact, starContact } from './actions';

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
    this.store.dispatch(removeContact(contact.id));
  }

  starContact(contact) {
    this.store.dispatch(starContact(contact.id));
  }
}
