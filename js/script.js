var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(city, zipCode, address, img) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
    }
    Locations.prototype.display = function () {
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipCode, address, img, phone, type, website) {
        var _this = _super.call(this, city, zipCode, address, img) || this;
        _this.phone = phone;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.display = function () {
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zipCode, address, img, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, city, zipCode, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
    };
    return Events;
}(Locations));
