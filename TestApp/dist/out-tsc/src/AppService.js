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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var http_1 = require("@angular/common/http");
require("rxjs/add/observable/empty");
var UserInfo = /** @class */ (function () {
    function UserInfo(id, userName, roles) {
        this.id = id;
        this.userName = userName;
        this.roles = roles;
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var AppService = /** @class */ (function () {
    function AppService(_router, http) {
        this._router = _router;
        this.http = http;
        this.serverAddr = 'http://localhost:8082';
    }
    AppService.prototype.obtainAccessToken = function (loginData) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'ngAuth');
        var headers = new http_1.HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        this.http.post(this.serverAddr + '/token', params.toString(), { headers: headers })
            .subscribe(function (data) {
            _this.saveToken(data);
            _this._router.navigate(['/']);
        });
    };
    AppService.prototype.getAuthToken = function () {
        return ng2_cookies_1.Cookie.get('access_token');
    };
    AppService.prototype.refreshToken = function () {
        var params = new URLSearchParams();
        params.append('refresh_token', ng2_cookies_1.Cookie.get('refresh_token'));
        params.append('grant_type', 'refresh_token');
        params.append('client_id', 'ngAuth');
        var headers = new http_1.HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        return this.http.post(this.serverAddr + '/token', params.toString(), { headers: headers });
    };
    AppService.prototype.saveToken = function (token) {
        var store_period = 365;
        ng2_cookies_1.Cookie.set("access_token", token.access_token, store_period);
        ng2_cookies_1.Cookie.set("refresh_token", token.refresh_token, store_period);
        ng2_cookies_1.Cookie.set("roles", token.roles, store_period);
    };
    AppService.prototype.userRoles = function () {
        return JSON.parse(ng2_cookies_1.Cookie.get('roles'));
    };
    AppService.prototype.getResource = function (resourceUrl) {
        return this.http.get(this.serverAddr + "/" + resourceUrl);
    };
    AppService.prototype.checkCredentials = function () {
        if (!ng2_cookies_1.Cookie.check('access_token')) {
            this._router.navigate(['login']);
        }
    };
    AppService.prototype.logout = function () {
        ng2_cookies_1.Cookie.delete('access_token');
        ng2_cookies_1.Cookie.delete('refresh_token');
        this._router.navigate(['login']);
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=AppService.js.map