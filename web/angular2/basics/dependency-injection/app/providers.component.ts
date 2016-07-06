import { Component, Injectable, OnInit, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig, HERO_DI_CONFIG } from './app.config';

import { Logger } from './logger.service';
import { UserService } from './user.service';
import { heroServiceProvider } from './heroes/hero.service.provider';
import { HeroService } from './heroes/hero.service';

let template = '{{log}}';

// provider-1
@Component({
  selector: 'provider-1',
  template: template,
  providers: [Logger]
})
export class Provider1Component {
  log: string;
  constructor(logger: Logger){
    logger.log('Hello from logger provided with Logged class');
    this.log = logger.logs[0];
  }
}

// provider-2
@Component({
  selector: 'provider-2',
  template: template,
  providers: [{ provide: Logger, useClass: Logger }],
})
export class Provider2Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass:Logger');
    this.log = logger.logs[0];
  }
}

// provider-3
class BetterLogger extends Logger {}

@Component({
  selector: 'provider-3',
  template: template,
  providers: [{ provide: Logger, useClass: BetterLogger }],
})
export class Provider3Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass:BetterLogger');
    this.log = logger.logs[0];
  }
}

// provider-4
@Injectable()
class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  log(message: string) {
    let name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}
@Component({
  selector: 'provider-4',
  template: template,
  providers: [UserService, { provide: Logger, useClass: EvenBetterLogger }],
})
export class Provider4Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from EvenBetterLogger');
    this.log = logger.logs[0];
  }
}

// provider-5
class NewLogger extends Logger { }
class OldLogger {
  logs: string[] = [];
  log(message: string) {
    throw new Error('Should not call the old logger!');
  };
}

@Component({
  selector: 'provider-5a',
  template: template,
  providers: [ NewLogger,
    // Not aliased! Creates two instance of `NewLogger`
    { provide: OldLogger, useClass: NewLogger }
  ],
})
export class Provider5aComponent {
  log: string;
  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if(newLogger === oldLogger) {
      throw new Error('expected the two loggers to be different instances');
    }
    oldLogger.log('Hello OldLogger (but we want NewLogger)');
    // The newLogger wasn't called so no logs[]
    // display the logs of the oldLogger.
    this.log = newLogger.logs[0] || oldLogger.logs[0]; 
  }
}

// provider-5b
@Component({
  selector: 'provider-5b',
  template: template,
  providers: [ NewLogger,
    // Alias OldLogger w/ reference to NewLogger
    { provide: OldLogger, useExisting: NewLogger }]
})
export class Provider5bComponent {
  log: string;
  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if(newLogger !== oldLogger) {
      throw new Error('expected the two loggers to be the same instance');
    }
    oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
    this.log = newLogger.logs[0];
  }
}

// provider-6
// An object in the shape of the logger service
let silentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: () => {}
};

@Component({
  selector: 'provider-6',
  template: template,
  providers: [{ provide: Logger, useValue: silentLogger }]
})
export class Provider6Component {
  log: string;
  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useValue');
    this.log = logger.logs[0];
  }
}

// provider-7
@Component({
  selector: 'provider-7',
  template: template,
  providers: [heroServiceProvider, Logger, UserService]
})
export class Provider7Component {
  // must be true else this component would have blown up at runtime
  log = 'Hero service injected successfully via heroServiceProvider';

  constructor(heroService: HeroService) {}
}

// provider-8
@Component({
  selector: 'provider-8',
  template: template,
  // FAIL! Can't use interface as provider token
  // providers: [{ provide: AppConfig, useValue: HERO_DI_CONFIG}]
  providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})
export class Provider8Component implements OnInit {
  log: string;
  // FAIL! Can't inject using the interface as the parameter type
  // constructor(private config: AppConfig) {}
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

  ngOnInit() {
    this.log = 'APP_CONFIG Application title is ' + this.config.title;
  }
}

// Sample procider 1 to 6 illustrate a required logger dependency.
// provider-9: Optional logger, can be null
import { Optional } from '@angular/core';

let some_message = 'Hello from the injected logger';

@Component({
  selector: 'provider-9',
  template: template,
})
export class Provider9Component implements OnInit {
  log: string;
  constructor(@Optional() private logger: Logger) {
    if(this.logger) {
      this.logger.log(some_message);
    }
  }

  ngOnInit() {
    this.log = this.logger ? this.logger.logs[0] : 'Optional logger was not available';
  }
}

@Component({
  selector: 'my-providers',
  template: `
    <h2>Provider variations</h2>
    <div id="p1"><provider-1></provider-1></div>
    <div id="p2"><provider-2></provider-2></div>
    <div id="p3"><provider-3></provider-3></div>
    <div id="p4"><provider-4></provider-4></div>
    <div id="p5a"><provider-5a></provider-5a></div>
    <div id="p5b"><provider-5b></provider-5b></div>
    <div id="p6"><provider-6></provider-6></div>
    <div id="p7"><provider-7></provider-7></div>
    <div id="p8"><provider-8></provider-8></div>
    <div id="p9"><provider-9></provider-9></div>
  `,
  directives: [
    Provider1Component,
    Provider2Component,
    Provider3Component,
    Provider4Component,
    Provider5aComponent,
    Provider5bComponent,
    Provider6Component,
    Provider7Component,
    Provider8Component,
    Provider9Component
  ],
})
export class ProvidersComponent { }
