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
var http_1 = require('@angular/http');
var car_1 = require('./car');
var CarsTableComponent = (function () {
    function CarsTableComponent(http) {
        this.http = http;
        this.car = new car_1.Car('', '', '');
        this.getListUrl = 'http://test-api.evermight.com/listcar.php';
        this.addCarUrl = 'http://test-api.evermight.com/addcar.php';
        this.deleteCarUrl = 'http://test-api.evermight.com/deletecar.php';
        this.id = 41;
    }
    CarsTableComponent.prototype.newCar = function () {
        this.car = new car_1.Car('Lancer', '1992', '0');
    };
    CarsTableComponent.prototype.getList = function () {
        var creds = "appkey=12";
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.getListUrl, creds, options)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.warn(err); });
    };
    CarsTableComponent.prototype.addCar = function (car) {
        var model = car.model;
        var year = car.year;
        var millage = car.millage;
        var creds = "model=" + model + "&year=" + year + "&millage=" + millage + "&appkey=12";
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addCarUrl, creds, options)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.warn(err); });
    };
    CarsTableComponent.prototype.deleteCar = function (id) {
        id = this.id;
        var creds = "id=" + id + "&appkey=12";
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.deleteCarUrl, creds, options)
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.warn(err); });
    };
    CarsTableComponent = __decorate([
        core_1.Component({
            selector: 'cars-table',
            templateUrl: 'app/cars-table.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CarsTableComponent);
    return CarsTableComponent;
}());
exports.CarsTableComponent = CarsTableComponent;
//# sourceMappingURL=cars-table.component.js.map