"use strict";
var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var myProgram;
(function (myProgram) {
    init();
    function init() {
        var rect = new Shapes.Rectangle(10, 4);
        alert(rect.getArea());
    }
})(myProgram || (myProgram = {}));
//# sourceMappingURL=index.js.map