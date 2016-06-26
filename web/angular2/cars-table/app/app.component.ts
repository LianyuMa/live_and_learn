import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';

import { AgGridNg2 } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';

import { Car } from './car';
import { CarsTableComponent } from './cars-table.component';

@Component({
    selector: 'my-app',
    template: '<cars-table></cars-table>',
    directives: [CarsTableComponent, AgGridNg2],
})
export class AppComponent {

  // columnDefs = [
  //   { headerName: "Model", field: "model" },
  //   { headerName: "Year", field: "year" },
  //   {
  //     headerName: "Millage",
  //     field: "millage",
  //     cellClass: 'rightJustify',
  //     cellRenderer: function (params: any) {
  //       return `${params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}km`; //thanks http://stackoverflow.com/users/28324/elias-zamaria
  //     }
  //   }
  // ];
  // // put data directly onto the controller
  // rowData = [
  //   { model: "Toyota", year: "1", millage: 35000 },
  //   { model: "Ford", year: "0", millage: 32000 },
  //   { model: "Porsche", year: "2", millage: 72000 },
  //   { model: "Toyota", year: "1", millage: 35000 },
  //   { model: "Ford", year: "0", millage: 32000 },
  //   { model: "Porsche", year: "2", millage: 72000 },
  //   { model: "Toyota", year: "1", millage: 35000 },
  //   { model: "Ford", year: "0", millage: 32000 },
  //   { model: "Porsche", year: "2", millage: 72000 },
  //   { model: "Toyota", year: "1", millage: 35000 },
  //   { model: "Ford", year: "0", millage: 32000 },
  //   { model: "Porsche", year: "2", millage: 72000 },
  // ];
  // GridOptions: GridOptions = {
  //   columnDefs: this.columnDefs,
  //   rowData: this.rowData
  // };
}
