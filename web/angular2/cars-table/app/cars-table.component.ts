import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Car } from './car';

@Component({
  selector: 'cars-table',
  templateUrl: 'app/cars-table.component.html',
})
export class CarsTableComponent {

  car = new Car('', '', '');

  constructor(public http: Http) {}

  private getListUrl = 'http://test-api.evermight.com/listcar.php';
  private addCarUrl = 'http://test-api.evermight.com/addcar.php';

  newCar() {
    this.car = new Car('Lancer', '1992', '0');
  }

  getList() {
    let creds = `appkey=12`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers });
    this.http.post(this.getListUrl, creds, options)
      .subscribe(
        data => console.log(data),
        err => console.warn(err)
      );
  }

  addCar(car) {
    const model = car.model;
    const year = car.year;
    const millage = car.millage;
    const creds = `model=${model}&year=${year}&millage=${millage}&appkey=12`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers });
    return this.http.post(this.addCarUrl, creds, options)
      .subscribe(
        data => console.log(data),
        err => console.warn(err)
      );
  }
}
