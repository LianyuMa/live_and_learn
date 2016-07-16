import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [WikipediaService],
})
export class AppComponent {
  items: Array<string>;
  constructor(private wikipediaService: WikipediaService) {}
  search(term: any) {
    this.wikipediaService.search(term).then(items => this.items = items);
  }
}
