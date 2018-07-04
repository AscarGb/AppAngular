import { Component, OnInit } from '@angular/core';
import { AppService, UserInfo } from 'src/AppService';

@Component({
    selector: 'foo-details',
    providers: [AppService],
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

    public foo: UserInfo;

    constructor(private _service: AppService) {
        this.foo = new UserInfo('', '');
    }

    ngOnInit() {
        this.getFoo();
    }



    getFoo() {
        this._service.getResource<UserInfo>('/api/Account/UserInfo')
            .subscribe(
            data => this.foo = data,
            error => this.foo.userName = 'Error');
    }

}
