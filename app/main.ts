import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ContactList } from './contact-list';
import { ContactStore } from './contact-store';

bootstrap(ContactList, [ContactStore]);