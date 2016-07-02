import { Contact as ContactModel} from './contact-store';

export interface IContactAction {
  type: string;
  id: number;
  name?: string;
}

export function addContact(name: string, id: number): IContactAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeContact(id: number): IContactAction {
  return {
    type: 'REMOVE',
    id
  };
}

export function starContact(id: number): IContactAction {
  return {
    type: 'STAR',
    id
  };
}