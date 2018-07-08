"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(o) {
        this.orderID = o.orderID;
        this.customerName = o.customerName;
        this.shipperCity = o.shipperCity;
        this.isShipped = o.isShipped;
    }
    return Order;
}());
exports.Order = Order;
var AuthData = /** @class */ (function () {
    function AuthData() {
    }
    return AuthData;
}());
exports.AuthData = AuthData;
var RefreshToken = /** @class */ (function () {
    function RefreshToken() {
    }
    return RefreshToken;
}());
exports.RefreshToken = RefreshToken;
//# sourceMappingURL=Types.js.map