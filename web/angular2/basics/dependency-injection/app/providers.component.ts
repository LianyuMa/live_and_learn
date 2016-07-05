import { Component, Injectable } from '@angular/core';

import { Logger } from './logger.service';
import { UserService } from './user.service';

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
  `,
  directives: [
    Provider1Component,
    Provider2Component,
    Provider3Component,
    Provider4Component,
    Provider5aComponent,
    Provider5bComponent,
    Provider6Component
  ],
})
export class ProvidersComponent { }
