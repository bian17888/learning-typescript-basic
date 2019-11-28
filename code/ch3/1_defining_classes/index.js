"use strict";
var ch3_1_definingClasses;
(function (ch3_1_definingClasses) {
    var Engine = /** @class */ (function () {
        function Engine(hoursePower, engineType) {
            this.hoursePower = hoursePower;
            this.engineType = engineType;
        }
        return Engine;
    }());
    var Car = /** @class */ (function () {
        function Car(engine) {
            this._engine = engine;
        }
        Object.defineProperty(Car.prototype, "engine", {
            get: function () {
                return this._engine;
            },
            set: function (value) {
                if (value === undefined) {
                    throw "Please supply a engine!";
                }
                this._engine = value;
            },
            enumerable: true,
            configurable: true
        });
        Car.prototype.start = function () {
            alert("Car Engine started " + this._engine.engineType);
        };
        return Car;
    }());
    window.onload = function () {
        var engine = new Engine(800, "v8");
        var car = new Car(engine);
        alert(car.engine.engineType);
        car.start();
    };
})(ch3_1_definingClasses || (ch3_1_definingClasses = {}));
//# sourceMappingURL=index.js.map