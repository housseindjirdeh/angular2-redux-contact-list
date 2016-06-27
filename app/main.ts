import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ContactList } from './app.component';
import { ContactStore } from './contact-store';

bootstrap(ContactList, [ContactStore]);