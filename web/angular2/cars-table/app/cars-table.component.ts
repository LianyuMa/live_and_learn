import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AgGridNg2 } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';

import { Car } from './car';

@Component({
  selector: 'cars-table',
  templateUrl: 'app/cars-table.component.html',
  directives: [AgGridNg2],
})
export class CarsTableComponent {

  car = new Car('', '', '');

  constructor(public http: Http) {}

  private getListUrl = 'http://test-api.evermight.com/listcar.php';
  private addCarUrl = 'http://test-api.evermight.com/addcar.php';
  private deleteCarUrl = 'http://test-api.evermight.com/deletecar.php';

  id = null;

  submitted = false;

  onSubmit() { this.submitted = true }

  active = true;

  test = [];

  columnDefs = [
    { headerName: 'ID', field: 'Id' },
    { headerName: 'Model', field: 'Model' },
    { headerName: 'Year', field: 'YEAR' },
    {
      headerName: 'Millage',
      field: 'Millage',
      cellClass: 'rightJustify',
      cellRenderer: function (params: any) {
        return `${params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}km`; //thanks http://stackoverflow.com/users/28324/elias-zamaria
      }
    }
  ];
  // put data directly onto the controller
  rowData = [
  //   { id: '1', model: "Toyota", year: "1", millage: 35000 },
  //   { id: '2', model: "Ford", year: "0", millage: 32000 },
  //   { id: '3', model: "Porsche", year: "2", millage: 72000 },
  //   { id: '4', model: "Toyota", year: "1", millage: 35000 },
  //   { id: '5', model: "Ford", year: "0", millage: 32000 },
  //   { id: '6', model: "Porsche", year: "2", millage: 72000 },
  //   { id: '7', model: "Toyota", year: "1", millage: 35000 },
  //   { id: '8', model: "Ford", year: "0", millage: 32000 },
  //   { id: '9', model: "Porsche", year: "2", millage: 72000 },
  //   { id: '10', model: "Toyota", year: "1", millage: 35000 },
  //   { id: '11', model: "Ford", year: "0", millage: 32000 },
  //   { id: '12', model: "Porsche", year: "2", millage: 72000 },
  ];

  GridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData
  };

  newCar() {
    this.car = new Car('Lancer', '1992', '0');
  }

  getList() {
    this.rowData = [];
    let creds = `appkey=12`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers });
    this.http.post(this.getListUrl, creds, options)
      .subscribe(
        data => console.log(data),
        err => {
          this.rowData = JSON.parse(err._body).cars;
          console.log(status);
        }
    );
  }

  addCar(car) {
    let model = car.model;
    let year = car.year;
    let millage = car.millage;
    let creds = `model=${model}&year=${year}&millage=${millage}&appkey=12`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers });
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    return this.http.post(this.addCarUrl, creds, options)
      .subscribe(
        data => console.log(data),
        err => {
          console.warn(err);
          if(JSON.parse(err._body).success) {
            this.getList();
          }
        }
    );
  }


  deleteCar(id) {
    id = this.id;
    const creds = `id=${id}&appkey=12`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers });
    return this.http.post(this.deleteCarUrl, creds, options)
      .subscribe(
        data => console.log(data),
        err => {
          console.warn(err);
          if(JSON.parse(err._body).success) {
            this.getList();
          }
        }
    );
  }
}
