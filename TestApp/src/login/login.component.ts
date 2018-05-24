import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: AppService) { }

  ngOnInit() {
  }

  public loginData = { username: "", password: "" };

  login() {
    this._service.obtainAccessToken(this.loginData);
  }
}
