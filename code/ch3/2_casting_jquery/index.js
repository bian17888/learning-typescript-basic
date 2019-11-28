"use strict";
/// <reference path="./types/jquery.d.ts" />
var ch3_2_casting_jquery;
(function (ch3_2_casting_jquery) {
    $(document).ready(function () {
        var calc = new Calculator("x", "y", "result");
    });
    var Calculator = /** @class */ (function () {
        function Calculator(xId, yId, resultId) {
            this.x = $("#" + xId);
            this.y = $("#" + yId);
            this.result = $("#" + resultId);
            this.init();
        }
        Calculator.prototype.init = function () {
            var _this = this;
            $("#add").click(function (event) {
                var result = _this.add(parseInt(_this.x.val()), parseInt(_this.y.val()));
                _this.result.html(result.toString());
            });
            $("#subtract").click(function (event) {
                var result = _this.subtract(parseInt(_this.x.val()), parseInt(_this.y.val()));
                _this.result.html(result.toString());
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
})(ch3_2_casting_jquery || (ch3_2_casting_jquery = {}));
//# sourceMappingURL=index.js.map