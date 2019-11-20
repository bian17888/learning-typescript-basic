"use strict";
var ch2_5_primitives;
(function (ch2_5_primitives) {
    // any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    // var result = doSomething("hi");
    // primitives
    var age = 21;
    var score = 3.14;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return "yes";
    };
    var hasHair = !!isBald();
    var firstName = "Kai";
    var lastName = "bian";
    // string array
    function getArrayLength(x) {
        var result = x.length;
        return result;
    }
    var names = ["A", "B", "C", "D"];
    var firstLetter = names[0];
    var namesLen = getArrayLength(names);
    // null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    // undefined
    var quanlity;
    var company = undefined;
    console.log("undefined examples");
    console.log(quanlity);
    console.log(company);
})(ch2_5_primitives || (ch2_5_primitives = {}));
//# sourceMappingURL=index.js.map