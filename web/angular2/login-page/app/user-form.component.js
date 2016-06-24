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
var user_1 = require('./user');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
// import { UserService } from './user.service';
var UserFormComponent = (function () {
    function UserFormComponent(http) {
        this.http = http;
        // model = new User('Jon', 'Snow', 'snowj@hbo.com', 'jonsnow');
        this.model = new user_1.User('', '', '', '');
        // constructor(private userService: UserService) {}
        this.submitted = false;
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    UserFormComponent.prototype.newUser = function () {
        var _this = this;
        this.model = new user_1.User('Jon', 'Snow', 'snowj@hbo.com', 'jonsnow');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserFormComponent.prototype.clearForm = function (model) {
        this.model = new user_1.User('', '', '', '');
    };
    UserFormComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    UserFormComponent.prototype.register = function (model) {
        var _this = this;
        var firstname = model.firstname;
        var lastname = model.lastname;
        var email = model.email;
        var password = model.password;
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var creds = "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&password=" + password + "&appkey=12";
        var options = new http_1.RequestOptions({ headers: headers });
        // const creds = `appkey="12"`;
        // this.http.post('http://test-api.evermight.com/register.php', JSON.stringify({
        //   firstname: firstname,
        //   lastname: lastname,
        //   email: email,
        //   password: password,
        //   appkey: 12,
        // // }), { headers: headers }).map(this.extractData).catch(this.handleError);
        // }), { headers: headers }).subscribe((res: Response) => {
        //   this.data = res.json();
        // });
        // this.http.post('http://test-api.evermight.com/register.php', creds, { headers: headers }).subscribe((res: Response) => { this.data = res.json(); });
        // this.http.post('http://test-api.evermight.com/register.php', creds, options).map(res => res.json()).subscribe(err => this.data = err);
        // console.log(`${this.data}`);
        // this.http.post('http://test-api.evermight.com/register.php', creds, { headers: headers }).map(this.extractData);
        this.http.post('http://test-api.evermight.com/register.php', creds, { headers: headers }).subscribe(function (res) { _this.data = res.json(); });
    };
    UserFormComponent.prototype.login = function (model) {
        var _this = this;
        var email = model.email;
        var password = model.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var creds = "email=" + email + "&password=" + password + "&appkey=12";
        this.http.post('http://test-api.evermight.com/login.php', creds, { headers: headers }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            _this.data = err._body;
        });
        // this.http.post('http://test-api.evermight.com/login.php', creds, { headers: headers }).map(res => {
        //   if(res.status === 500) {
        //     return res.json();
        //   }
        // }).subscribe(
        //   (data) => this.data = data, // Reach here if res.status >= 200 && <= 299
        //   (err) => this.data = err);
        // this.http.post('http://test-api.evermight.com/login.php', creds, { headers: headers }).catch((res: Response) => this.data = res._body);
    };
    Object.defineProperty(UserFormComponent.prototype, "diagnostic", {
        // get data() { return this.data }
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'app/user-form.component.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map