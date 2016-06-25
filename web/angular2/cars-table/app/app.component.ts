import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';

import { Car } from './car';
import { CarsTableComponent } from './cars-table.component';

@Component({
    selector: 'my-app',
    template: '<cars-table></cars-table>',
    directives: [CarsTableComponent],
})
export class AppComponent { }
