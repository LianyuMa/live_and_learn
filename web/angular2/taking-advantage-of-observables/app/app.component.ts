import { Component } from '@angular/core';
import { Control } from '@angular/common';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { enableProdMode } from '@angular/core';

import { WikipediaService } from './wikipedia.service';

enableProdMode();

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [WikipediaService],
})
export class AppComponent {
  items: Observable<Array<string>>;
  term = new Control();
  constructor(private wikipediaService: WikipediaService) {
    this.items =  wikipediaService.search(this.term.valueChanges);
  }
  // search(term: any) {
  //   this.wikipediaService.search(term).then(items => this.items = items);
  // }
}
