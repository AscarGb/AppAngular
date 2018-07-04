import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/empty';
import { AuthData } from 'src/Types';

export class UserInfo {
    constructor(
        public id: string,
        public userName: string) { }
}

@Injectable()
export class AppService {
    serverAddr: string = 'http://localhost:8082';

    constructor(
        private _router: Router, private _http: Http, private http: HttpClient) { }

    obtainAccessToken(loginData) {
        let params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'ngAuth');  

        let headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

        this.http.post<AuthData>(this.serverAddr + '/token', params.toString(), { headers: headers })            
            .subscribe(
            data => {
                this.saveToken(data);
                this._router.navigate(['/']);
            });
    }

    getAuthToken() {
        return Cookie.get('access_token');
    }

    refreshToken() {
        let params = new URLSearchParams();
        params.append('refresh_token', Cookie.get('refresh_token'));
        params.append('grant_type', 'refresh_token');
        params.append('client_id', 'ngAuth');        
        let headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        return this.http.post<AuthData>(this.serverAddr + '/token', params.toString(), { headers: headers });
    }

    saveToken(token: AuthData) {
        let store_period = 365;
        Cookie.set("access_token", token.access_token, store_period);
        Cookie.set("refresh_token", token.refresh_token, store_period);
    }

    getResource<T>(resourceUrl: string): Observable<T> {
        return this.http.get<T>(this.serverAddr + "/" + resourceUrl);
    }

    checkCredentials() {
        if (!Cookie.check('access_token')) {
            this._router.navigate(['/login']);
        }
    }

    logout() {
        Cookie.delete('access_token');
        Cookie.delete('refresh_token');
        this._router.navigate(['/login']);
    }
}
