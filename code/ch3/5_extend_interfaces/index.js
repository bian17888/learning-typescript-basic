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
var ch3_5_extend_interfaces;
(function (ch3_5_extend_interfaces) {
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
        // todo : It will throw a error when you remove stop function
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
        function Auto(options) {
            this.basePrice = options.basePrice;
            this.engine = options.engine;
            this.state = options.state;
            this.make = options.make;
            this.model = options.model;
            this.year = options.year;
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
        Auto.prototype.getAccessoryList = function () {
            return this.accessoryList;
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
        function Truck(options) {
            var _this = _super.call(this, options) || this;
            _this.bedLength = options.bedLength;
            _this.fourByFour = options.fourByFour;
            return _this;
        }
        return Truck;
    }(Auto));
    window.onload = function () {
        var engine = new Engine(400, "V8");
        var truck = new Truck({
            basePrice: 40000,
            engine: engine,
            state: "Arizona",
            make: "Ford",
            model: "F-150",
            year: 2019,
            bedLength: "short bed",
            fourByFour: true
        });
        console.log(truck.bedLength);
        console.log(truck.engine);
    };
})(ch3_5_extend_interfaces || (ch3_5_extend_interfaces = {}));
//# sourceMappingURL=index.js.map