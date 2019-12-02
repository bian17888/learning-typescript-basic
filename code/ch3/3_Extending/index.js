"use strict";
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
var ch3_3_extending;
(function (ch3_3_extending) {
    /**Engine */
    var Engine = /** @class */ (function () {
        function Engine(hoursePower, engineType) {
            this.hoursePower = hoursePower;
            this.engineType = engineType;
        }
        Engine.prototype.start = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        Engine.prototype.stop = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return Engine;
    }());
    /**Accessory */
    var Accessory = /** @class */ (function () {
        function Accessory(accessoryNumber, title) {
            this.accessoryNumber = accessoryNumber;
            this.title = title;
        }
        return Accessory;
    }());
    /**Auto */
    var Auto = /** @class */ (function () {
        function Auto(basePrice, engine, make, model) {
            this.basePrice = basePrice;
            this.engine = engine;
            this.make = make;
            this.model = model;
        }
        Auto.prototype.calculateTotal = function () {
            var taxRate = 0.08;
            return this.basePrice + taxRate * this.basePrice;
        };
        Auto.prototype.addAccesstories = function () {
            var accesstories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                accesstories[_i] = arguments[_i];
            }
            this.accessoryList = "";
            for (var i = 0; i < accesstories.length; i++) {
                var ac = accesstories[i];
                this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br /> ";
            }
        };
        Object.defineProperty(Auto.prototype, "basePrice", {
            get: function () {
                return this._basePrice;
            },
            set: function (value) {
                this._basePrice = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Auto.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value === undefined) {
                    throw "Please supply an engine!";
                }
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        return Auto;
    }());
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        function Truck(basePrice, engine, make, model, bedLength, fourByFour) {
            var _this = _super.call(this, basePrice, engine, make, model) || this;
            _this.bedLength = bedLength;
            _this.fourByFour = fourByFour;
            return _this;
        }
        return Truck;
    }(Auto));
    window.onload = function () {
        var engine = new Engine(300, "v8");
        // var auto = new Auto(40000, engine, "Chevy", "Silverado");
        // alert(auto.engine.engineType);
        var truck = new Truck(80000, engine, "Chevy", "Silverado", "Long Bed", true);
        alert(truck.engine.engineType);
        alert(truck.bedLength);
        alert(truck.calculateTotal().toString());
        truck.addAccesstories(new Accessory(1, "SunRoof"), new Accessory(2, "towing package"));
        alert(truck.accessoryList);
        truck.engine.start(function (stopStatus, engineType) {
            alert(engineType + " was started!");
        });
    };
})(ch3_3_extending || (ch3_3_extending = {}));
//# sourceMappingURL=index.js.map