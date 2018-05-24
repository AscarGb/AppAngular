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
  }


  public foo = new Foo(1, 'sample foo');
  private foosUrl = 'http://localhost:8082/spring-security-oauth-resource/foos/';

  

  getFoo() {
    this._service.getResource(this.foosUrl + this.foo.id)
      .subscribe(
      data => this.foo = data,
      error => this.foo.name = 'Error');
  }

}
