import { Injectable } from '@angular/core';
import { AppService } from 'src/AppService';
import { Cookie } from 'ng2-cookies';
@Injectable()
export class AuthService {
    constructor(private _service: AppService) { }    
    public isAuthenticated(): boolean {
        return Cookie.check('access_token');
    }
}