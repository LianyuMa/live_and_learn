import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { Ng2BootstrapComponent } from './ng2-bootstrap.component';
import { AlertComponent, DATEPICKER_DIRECTIVES } from '../node_modules/ng2-bootstrap/ng2-bootstrap';

bootstrap(AppComponent, [Ng2BootstrapComponent, AlertComponent, DATEPICKER_DIRECTIVES]);
