"use strict";
var ch2_7_function;
(function (ch2_7_function) {
    /** group1 */
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log("Hello " + (name || "unknown person"));
    };
    helloWorld();
    helloWorld("beck");
    /**group2 */
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 11 };
    squareIt = function (rect) {
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(ch2_7_function || (ch2_7_function = {}));
//# sourceMappingURL=index.js.map