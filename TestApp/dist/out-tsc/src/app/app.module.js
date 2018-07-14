"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var http_1 = require("@angular/http");
var foo_component_1 = require("./foo/foo.component");
var login_component_1 = require("./login/login.component");
var forms_1 = require("@angular/forms");
var AppService_1 = require("src/AppService");
var orders_component_1 = require("./orders/orders.component");
var order_component_1 = require("./order/order.component");
var common_1 = require("@angular/common");
var http_2 = require("@angular/common/http");
var http_3 = require("@angular/common/http");
var RequestInterceptorService_1 = require("src/RequestInterceptorService");
var admin_component_1 = require("./admin/admin.component");
var AuthGuardService_1 = require("src/AuthGuardService");
var AuthService_1 = require("src/AuthService");
var RoleGuardService_1 = require("src/RoleGuardService");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var register_component_1 = require("./register/register.component");
var app_routing_1 = require("src/app/app-routing");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var app_nav_component_1 = require("./app-nav/app-nav.component");
var layout_1 = require("@angular/cdk/layout");
var default_component_1 = require("./default/default.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                foo_component_1.FooComponent,
                login_component_1.LoginComponent,
                orders_component_1.OrdersComponent,
                order_component_1.OrderComponent,
                admin_component_1.AdminComponent,
                register_component_1.RegisterComponent,
                app_nav_component_1.AppNavComponent,
                default_component_1.DefaultComponent
            ],
            imports: [
                http_2.HttpClientModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                //  OAuthModule.forRoot(),
                app_routing_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                animations_1.BrowserAnimationsModule, material_1.MatButtonModule, material_1.MatCheckboxModule, layout_1.LayoutModule, material_1.MatToolbarModule, material_1.MatSidenavModule, material_1.MatIconModule, material_1.MatListModule
            ],
            providers: [
                { provide: http_3.HTTP_INTERCEPTORS, useClass: RequestInterceptorService_1.RequestInterceptorService, multi: true },
                AppService_1.AppService, AuthGuardService_1.AuthGuardService, AuthService_1.AuthService, RoleGuardService_1.RoleGuardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map