"use strict";
var CarCh1 = /** @class */ (function () {
    function CarCh1(engine) {
        this.engine = engine;
    }
    CarCh1.prototype.start = function () {
        alert("Engine started : " + this.engine);
    };
    CarCh1.prototype.stop = function () {
        alert("Engine stopped : " + this.engine);
    };
    return CarCh1;
}());
window.onload = function () {
    var car = new CarCh1("v8");
    car.start();
    car.stop();
};
//# sourceMappingURL=helloWorld.js.map