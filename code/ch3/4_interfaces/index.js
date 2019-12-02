"use strict";
var ch3_4_interfaces;
(function (ch3_4_interfaces) {
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
    /**CustomEngine */
    var CustomEngine = /** @class */ (function () {
        function CustomEngine() {
        }
        CustomEngine.prototype.start = function (callback) {
            window.setTimeout(function () {
                callback(true, "Custom Engine");
            }, 1000);
        };
        CustomEngine.prototype.stop = function (callback) {
            window.setTimeout(function () {
                callback(true, "Custom Engine");
            }, 1000);
        };
        return CustomEngine;
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
        function Auto(basePrice, engine, state, make, model, year) {
            this.basePrice = basePrice;
            this.engine = engine;
            this.state = state;
            this.make = make;
            this.model = model;
            this.year = year;
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
    window.onload = function () {
        // todo : It will throw a error
        // var engine = new CustomEngine();
        // var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
        // alert(auto.engine.engineType.toString());
        // todo : There will still be errors, because new Auto accepts an IEngine type!
        // var engine = new Engine(150, "V9");
        // var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
        // alert(auto.engine.hoursePower.toString());
        // success
        var engine = new Engine(150, "V9");
        var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
        var myEngine = auto.engine;
        alert(myEngine.hoursePower.toString());
    };
})(ch3_4_interfaces || (ch3_4_interfaces = {}));
//# sourceMappingURL=index.js.map