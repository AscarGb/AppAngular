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
var FooComponent = /** @class */ (function () {
    function FooComponent(_service) {
        this._service = _service;
        this.foo = new AppService_1.Foo(1, 'sample foo');
        this.foosUrl = this._service.serverAddr + '/api/Orders';
    }
    FooComponent.prototype.ngOnInit = function () {
    };
    FooComponent.prototype.getFoo = function () {
        var _this = this;
        this._service.getResource(this.foosUrl + this.foo.id)
            .subscribe(function (data) { return _this.foo = data; }, function (error) { return _this.foo.name = 'Error'; });
    };
    FooComponent = __decorate([
        core_1.Component({
            selector: 'foo-details',
            providers: [AppService_1.AppService],
            templateUrl: './foo.component.html',
            styleUrls: ['./foo.component.css']
        }),
        __metadata("design:paramtypes", [AppService_1.AppService])
    ], FooComponent);
    return FooComponent;
}());
exports.FooComponent = FooComponent;
//# sourceMappingURL=foo.component.js.map