"use strict";
/// <reference path="./App/index.ts" />
var ch4_4_separating_internal_module;
(function (ch4_4_separating_internal_module) {
    var Shapes = App.Shapes;
    var Utils = App.Utils;
    //Wrapper will pull variables below out of the global scope
    (function () {
        var log = new Utils.Logger(App.LoggerMode.Console);
        var p = new Shapes.Point(3, 4);
        var dist = p.getDist();
        log.write("distance = " + dist);
        var rect = new Shapes.Rectangle(10, 5);
        var perimeter = rect.getPerimeter();
        log.write("perimeter = " + perimeter);
    })();
})(ch4_4_separating_internal_module || (ch4_4_separating_internal_module = {}));
//# sourceMappingURL=index.js.map