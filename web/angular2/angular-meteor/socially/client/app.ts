import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';

import template from './app.html';

@Component({
  selector: 'app',
  template
})
class Socially { }

bootstrap(Socially);
