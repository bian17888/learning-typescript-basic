"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Point;
}());
// todo : terrible - you can get it with using 'window.dist'
var p = new Point(3, 4);
var dist = p.getDist();
alert(dist);
//# sourceMappingURL=index.js.map