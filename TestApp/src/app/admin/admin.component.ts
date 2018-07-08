import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/AppService';
import { RefreshToken } from 'src/Types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    refreshToken: RefreshToken[];

    constructor(private _service: AppService, private http: HttpClient) {
    }

    ngOnInit() {
        this.getTokens();
    }

    getTokens() {
        this._service.getResource<RefreshToken[]>('/api/RefreshTokens')
            .subscribe(
            data => this.refreshToken = data
            );
    }
    remToken(token: RefreshToken) {
        this.http.post<any>(this._service.serverAddr + '/api/RefreshTokens/Delete', { tokenId: token.id })
            .subscribe(
            data => {
                this.getTokens();
            }
            );
        return false;
    }
}