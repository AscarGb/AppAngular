import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _router: Router, private _service: AppService) { }

    ngOnInit() {
    }

    public loginData = { username: "", password: "" };

    login() {
        this._service.obtainAccessToken(this.loginData);
    }
    register() {
        this._router.navigate(['register']);
    }
}
