import Immutable = require('immutable');
import { IContactAction } from './actions';
import { Contact as ContactModel} from './contact-store';

export function reducer(state: Immutable.List<ContactModel> = Immutable.List<ContactModel>(), action: IContactAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        id: action.id,
        name: action.name,
        star: false
      });
    case 'REMOVE':
      return state.delete(findIndexById());
    case 'STAR':
      return (<any>state).update(findIndexById(), (contact) => {
        return {
          id: contact.id,
          name: contact.name,
          star: !contact.star
        };
      });
    default:
      return state;
  }

  function findIndexById() {
    return state.findIndex((contact) => contact.id === action.id);
  }
}