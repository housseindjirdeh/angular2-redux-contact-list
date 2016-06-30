import Immutable = require('immutable');
import { createStore } from 'redux';
import { reducer, IContactAction } from './reducer';

export class Contact {
  id: number;
  name: String;
  star: boolean;
}

export class ContactStore {
  store = createStore(reducer, Immutable.List<Contact>());

  get contacts(): Immutable.List<Contact> {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}