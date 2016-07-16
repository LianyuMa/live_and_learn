import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search(terms: Observable<string>, debounceDuration = 400) {
    return terms.debounceTime(debounceDuration).distinctUntilChanged()
             .switchMap(term => this.rawSearch(term));
  }

  rawSearch(term: string) {
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .map((request) => request.json()[1]);
  }
}
