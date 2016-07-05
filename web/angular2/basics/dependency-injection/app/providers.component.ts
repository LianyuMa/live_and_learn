import { Component } from '@angular/core';

import { Logger } from './logger.service';

let template = '{{log}}';

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

@Component({
  selector: 'my-providers',
  template: `
    <h2>Provider variations</h2>
    <div id="p1"><provider-1></provider-1></div>
  `,
  directives: [Provider1Component],
})
export class ProvidersComponent { }
