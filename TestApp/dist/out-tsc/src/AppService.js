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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var Foo = /** @class */ (function () {
    function Foo(id, name) {
        this.id = id;
        this.name = name;
    }
    return Foo;
}());
exports.Foo = Foo;
var AppService = /** @class */ (function () {
    function AppService(_router, _http) {
        this._router = _router;
        this._http = _http;
        this.serverAddr = 'http://localhost:8082';
    }
    AppService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        //params.append('client_id', 'fooClientIdPassword');
        // let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("fooClientIdPassword:secret") });
        var headers = new http_1.Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post(this.serverAddr + '/token', params.toString(), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.saveToken(data); }, function (err) { return alert('Invalid Credentials'); });
    };
    AppService.prototype.saveToken = function (token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        ng2_cookies_1.Cookie.set("access_token", token.access_token, expireDate);
        this._router.navigate(['/']);
    };
    AppService.prototype.getResource = function (resourceUrl) {
        var headers = new http_1.Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + ng2_cookies_1.Cookie.get('access_token') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.serverAddr + "/" + resourceUrl, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AppService.prototype.checkCredentials = function () {
        if (!ng2_cookies_1.Cookie.check('access_token')) {
            this._router.navigate(['/login']);
        }
    };
    AppService.prototype.logout = function () {
        ng2_cookies_1.Cookie.delete('access_token');
        this._router.navigate(['/login']);
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=AppService.js.map