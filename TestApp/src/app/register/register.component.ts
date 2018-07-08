import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    Message: string;

    public loginData = { username: "", password: "", ConfirmPassword: "" };

    constructor(private _service: AppService, private http: HttpClient) { }

    ngOnInit() {
    }
    registerUser() {
        this.http.post<any>(this._service.serverAddr + '/api/Account/Register', this.loginData)
            .subscribe(
            data => {
                this._service.obtainAccessToken(this.loginData);
            },
            error => {
                console.log(error);
                this.Message = error.message;
            }
            );
    }
}
