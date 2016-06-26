"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var main_1 = require('ag-grid-ng2/main');
var cars_table_component_1 = require('./cars-table.component');
var AppComponent = (function () {
    function AppComponent() {
        this.columnDefs = [
            { headerName: "Model", field: "model" },
            { headerName: "Year", field: "year" },
            {
                headerName: "Millage",
                field: "millage",
                cellClass: 'rightJustify',
                cellRenderer: function (params) {
                    return params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "km"; //thanks http://stackoverflow.com/users/28324/elias-zamaria
                }
            }
        ];
        // put data directly onto the controller
        this.rowData = [
            { model: "Toyota", year: "1", millage: 35000 },
            { model: "Ford", year: "0", millage: 32000 },
            { model: "Porsche", year: "2", millage: 72000 },
            { model: "Toyota", year: "1", millage: 35000 },
            { model: "Ford", year: "0", millage: 32000 },
            { model: "Porsche", year: "2", millage: 72000 },
            { model: "Toyota", year: "1", millage: 35000 },
            { model: "Ford", year: "0", millage: 32000 },
            { model: "Porsche", year: "2", millage: 72000 },
            { model: "Toyota", year: "1", millage: 35000 },
            { model: "Ford", year: "0", millage: 32000 },
            { model: "Porsche", year: "2", millage: 72000 },
        ];
        this.GridOptions = {
            columnDefs: this.columnDefs,
            rowData: this.rowData
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Cars Table</h1><ag-grid-ng2 class="ag-fresh" style="height: 200px; width: 610px" [rowGroupPanelShow]="always" [columnDefs]="columnDefs"  [rowData] = "rowData"></ag-grid-ng2><hr><cars-table></cars-table>',
            directives: [cars_table_component_1.CarsTableComponent, main_1.AgGridNg2],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map