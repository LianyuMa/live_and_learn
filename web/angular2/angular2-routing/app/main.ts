import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsAppRoutes } from './contacts.routes';

bootstrap(AppComponent, [provideRouter(ContactsAppRoutes)]);
