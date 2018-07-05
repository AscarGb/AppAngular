import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private _service: AppService) { }

    ngOnInit() {
        this._service.checkCredentials();
        this._service.userRoles().some(a => a == "Admin")
    }

}
