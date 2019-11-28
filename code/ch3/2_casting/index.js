"use strict";
var ch3_2_casting;
(function (ch3_2_casting) {
    window.onload = function () {
        var calc = new Calculator("x", "y", "result");
    };
    var Calculator = /** @class */ (function () {
        function Calculator(xId, yId, resultId) {
            this.x = document.getElementById(xId);
            this.y = document.getElementById(yId);
            this.result = document.getElementById(resultId);
            this.init();
        }
        Calculator.prototype.init = function () {
            var _this = this;
            document.getElementById("add").addEventListener("click", function (event) {
                var result = _this.add(parseInt(_this.x.value), parseInt(_this.y.value));
                _this.result.innerHTML = result.toString();
            });
            document.getElementById("subtract").addEventListener("click", function (event) {
                var result = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value));
                _this.result.innerHTML = result.toString();
            });
        };
        Calculator.prototype.add = function (x, y) {
            return x + y;
        };
        Calculator.prototype.subtract = function (x, y) {
            return x - y;
        };
        return Calculator;
    }());
})(ch3_2_casting || (ch3_2_casting = {}));
//# sourceMappingURL=index.js.map