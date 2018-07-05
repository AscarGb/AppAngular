import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from 'src/AuthService';
import { AppService } from 'src/AppService';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router, private _service: AppService) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {

        const expectedRole = route.data.expectedRole;

        if (!this.auth.isAuthenticated() || !this._service.userRoles().some(a => a == expectedRole)) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}