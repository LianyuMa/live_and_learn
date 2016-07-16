import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { WikipediaService } from './wikipedia.service';
import { JSONP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [WikipediaService, JSONP_PROVIDERS]);
