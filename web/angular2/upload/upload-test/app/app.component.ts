import { Component } from '@angular/core';
import { UploadComponent } from './upload.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [UploadComponent]
})
export class AppComponent { }
