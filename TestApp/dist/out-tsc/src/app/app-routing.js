"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_component_1 = require("src/app/register/register.component");
var admin_component_1 = require("src/app/admin/admin.component");
var RoleGuardService_1 = require("src/RoleGuardService");
var AuthGuardService_1 = require("src/AuthGuardService");
var login_component_1 = require("src/app/login/login.component");
var home_component_1 = require("src/app/home/home.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var default_component_1 = require("src/app/default/default.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index/home' },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'admin', component: admin_component_1.AdminComponent, canActivate: [RoleGuardService_1.RoleGuardService],
        data: {
            expectedRole: 'Admin'
        }
    },
    { path: 'register', component: register_component_1.RegisterComponent },
    {
        path: 'index', component: default_component_1.DefaultComponent, canActivate: [AuthGuardService_1.AuthGuardService],
        children: [{
                path: 'home',
                component: home_component_1.HomeComponent
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.js.map