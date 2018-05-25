import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IOrder } from 'src/Types';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    @Input() order: IOrder;

    constructor() { }

    ngOnInit() {       
    }
}
