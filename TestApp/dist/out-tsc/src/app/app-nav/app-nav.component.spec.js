"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sidenav_1 = require("@angular/material/sidenav");
var app_nav_component_1 = require("./app-nav.component");
describe('AppNavComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.fakeAsync(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [sidenav_1.MatSidenavModule],
            declarations: [app_nav_component_1.AppNavComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(app_nav_component_1.AppNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=app-nav.component.spec.js.map