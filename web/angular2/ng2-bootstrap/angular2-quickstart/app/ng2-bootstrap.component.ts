import { Component } from '@angular/core';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'ng2-bootstrap',
  templateUrl: 'ng2-bootstrap.html',
  directives: [
    AlertComponent, DATEPICKER_DIRECTIVES
  ]
})
export class Ng2Bootstrap {
  date: Date = new Date();
}
