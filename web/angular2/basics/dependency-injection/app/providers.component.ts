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
      oldLogger.log('Hello OldLogger (but we want NewLogger)');
      // The newLogger wasn't called so no logs[]
      // display the logs of the oldLogger.
      this.log = newLogger.logs[0] || oldLogger.logs[0];
    }
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
  `,
  directives: [
    Provider1Component,
    Provider2Component,
    Provider3Component,
    Provider4Component
  ],
})
export class ProvidersComponent { }
