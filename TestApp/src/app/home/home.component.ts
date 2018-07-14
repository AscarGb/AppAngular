import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';

@Component({
  selector: 'home-header',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service: AppService) { }

  ngOnInit() {
  //  this._service.checkCredentials();
  }

  logout() {
      this._service.logout();
      return false;
  }

}
