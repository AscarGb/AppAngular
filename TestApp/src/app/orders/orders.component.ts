import { Component, OnInit } from '@angular/core';
import { OrderComponent } from 'src/app/order/order.component';
import { IOrder, Order } from 'src/Types';
import { Observable } from 'rxjs/internal/Observable';
import { AppService } from 'src/AppService';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    orders: IOrder[];

    constructor(private _service: AppService) {
    }

    ngOnInit() {
        this.getOrders().subscribe(orders => {
            this.orders = orders;
        });
    }

    getOrders(): Observable<IOrder[]> {
        return this._service.getResource<IOrder[]>("api/Orders");
    }
}