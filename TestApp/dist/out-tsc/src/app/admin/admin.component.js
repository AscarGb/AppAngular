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
var AppService_1 = require("src/AppService");
var http_1 = require("@angular/common/http");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(_service, http) {
        this._service = _service;
        this.http = http;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getTokens();
    };
    AdminComponent.prototype.getTokens = function () {
        var _this = this;
        this._service.getResource('/api/RefreshTokens')
            .subscribe(function (data) { return _this.refreshToken = data; });
    };
    AdminComponent.prototype.remToken = function (token) {
        var _this = this;
        this.http.post(this._service.serverAddr + '/api/RefreshTokens/Delete', { tokenId: token.id })
            .subscribe(function (data) {
            _this.getTokens();
        });
        return false;
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        }),
        __metadata("design:paramtypes", [AppService_1.AppService, http_1.HttpClient])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map