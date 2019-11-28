"use strict";
var ch1_1_helloWorld;
(function (ch1_1_helloWorld) {
    var Car = /** @class */ (function () {
        function Car(engine) {
            this.engine = engine;
        }
        Car.prototype.start = function () {
            alert("Engine started : " + this.engine);
        };
        Car.prototype.stop = function () {
            alert("Engine stopped : " + this.engine);
        };
        return Car;
    }());
    window.onload = function () {
        var car = new Car("v8");
        car.start();
        car.stop();
    };
})(ch1_1_helloWorld || (ch1_1_helloWorld = {}));
//# sourceMappingURL=helloWorld.js.map