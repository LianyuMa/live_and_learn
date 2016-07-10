import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';

export const ContactsRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent }
];

// interface Route {
//   path?: string;
//   component?: Type|string;
// }
