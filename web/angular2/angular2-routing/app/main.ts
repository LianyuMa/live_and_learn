import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsAppComponent } from './contacts-app.component';
import { ContactsRoutes } from './contacts.routes';

bootstrap(ContactsAppComponent, [provideRouter(ContactsRoutes)]);
