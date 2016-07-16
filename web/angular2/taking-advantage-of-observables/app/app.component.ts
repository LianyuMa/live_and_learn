import { Component } from '@angular/core';
import { Control } from '@angular/common';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { WikipediaService } from './wikipedia.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [WikipediaService],
})
export class AppComponent {
  items: Array<string>;
  term = new Control();
  constructor(private wikipediaService: WikipediaService) {
    this.term.valueChanges.debounceTime(400).distinctUntilChanged()
      .subscribe(term => this.wikipediaService.search(term).then(items => this.items = items));
  }
  // search(term: any) {
  //   this.wikipediaService.search(term).then(items => this.items = items);
  // }
}
