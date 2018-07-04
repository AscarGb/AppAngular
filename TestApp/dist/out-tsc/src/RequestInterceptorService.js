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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppService_1 = require("src/AppService");
var RequestInterceptorService = /** @class */ (function () {
    function RequestInterceptorService(injector) {
        this.injector = injector;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs_1.BehaviorSubject(null);
    }
    RequestInterceptorService.prototype.addToken = function (req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    };
    RequestInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var appService = this.injector.get(AppService_1.AppService);
        return next.handle(this.addToken(req, appService.getAuthToken())).pipe(operators_1.catchError(function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                switch (error.status) {
                    case 400:
                        return _this.handle400Error(error);
                    case 401:
                        return _this.handle401Error(req, next);
                }
            }
            else {
                return rxjs_1.throwError(error);
            }
        }));
    };
    RequestInterceptorService.prototype.handle400Error = function (error) {
        if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
            return this.logoutUser();
        }
        return rxjs_1.throwError(error);
    };
    RequestInterceptorService.prototype.handle401Error = function (req, next) {
        var _this = this;
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);
            var appService_1 = this.injector.get(AppService_1.AppService);
            return appService_1.refreshToken().pipe(operators_1.switchMap(function (newToken) {
                if (newToken.access_token) {
                    _this.tokenSubject.next(newToken.access_token);
                    appService_1.saveToken(newToken);
                    return next.handle(_this.addToken(req, newToken.access_token));
                }
                // If we don't get a new token, we are in trouble so logout.                    
                return _this.logoutUser();
            }), operators_1.catchError(function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                return _this.logoutUser();
            }), operators_1.finalize(function () {
                _this.isRefreshingToken = false;
            }));
        }
        else {
            return this.tokenSubject.pipe(operators_1.filter(function (token) { return token != null; }), operators_1.take(1), operators_1.switchMap(function (token) {
                return next.handle(_this.addToken(req, token));
            }));
        }
    };
    RequestInterceptorService.prototype.logoutUser = function () {
        // Route to the login page (implementation up to you)      
        var appService = this.injector.get(AppService_1.AppService);
        appService.logout();
        return rxjs_1.throwError("");
    };
    RequestInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], RequestInterceptorService);
    return RequestInterceptorService;
}());
exports.RequestInterceptorService = RequestInterceptorService;
//# sourceMappingURL=RequestInterceptorService.js.map