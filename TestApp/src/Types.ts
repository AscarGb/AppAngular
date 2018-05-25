export interface IOrder {
    orderID: number;
    customerName: string;
    shipperCity: string;
    isShipped: boolean;
}

export class Order implements IOrder {
    orderID: number;
    customerName: string;
    shipperCity: string;
    isShipped: boolean;


    constructor(o: IOrder) {
        this.orderID = o.orderID;
        this.customerName = o.customerName;
        this.shipperCity = o.shipperCity;
        this.isShipped = o.isShipped;
    }
}