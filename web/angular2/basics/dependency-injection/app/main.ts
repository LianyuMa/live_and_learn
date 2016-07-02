import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HeroService} from './heroes/hero.service';

bootstrap(AppComponent, [HeroService]);
