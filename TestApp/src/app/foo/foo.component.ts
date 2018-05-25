import { Component, OnInit } from '@angular/core';
import { AppService, Foo } from 'src/AppService';

@Component({
    selector: 'foo-details',
    providers: [AppService],
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

    constructor(private _service: AppService) { }

    ngOnInit() {
        this.getFoo();
    }

    public foo: Foo;

    getFoo() {
        this._service.getResource<Foo>('/api/Account/UserInfo')
            .subscribe(
            data => this.foo = data,
            error => this.foo.userName = 'Error');
    }

}
