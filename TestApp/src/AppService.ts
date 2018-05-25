import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';


 
export class Foo {    
    constructor(
        public id: number,
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
        //params.append('client_id', 'fooClientIdPassword');
        // let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("fooClientIdPassword:secret") });
        let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        this._http.post(this.serverAddr + '/token', params.toString(), options)
            .map(res => res.json())
            .subscribe(
            data => this.saveToken(data),
            err => alert('Invalid Credentials'));
    }

    saveToken(token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        Cookie.set("access_token", token.access_token, expireDate);
        this._router.navigate(['/']);
    }

    getResource<T>(resourceUrl): Observable<T> {
        let headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer ' + Cookie.get('access_token') });
        //var options = new RequestOptions({ headers: headers });
        return this.http.get<T>(this.serverAddr + "/" + resourceUrl, { headers: headers })
            //.map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    checkCredentials() {
        if (!Cookie.check('access_token')) {
            this._router.navigate(['/login']);
        }
    }

    logout() {
        Cookie.delete('access_token');
        this._router.navigate(['/login']);
    }
}
