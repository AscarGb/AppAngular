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

export class AuthData {
    access_token: string;
    expires_in: number
    refresh_token: string;
    roles: string
}