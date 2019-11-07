"use strict";
/// <reference path="./typings/knockout.d.ts" />
var ch2_4_ambient_before;
(function (ch2_4_ambient_before) {
    var name = ko.observable("beck");
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    // var value: string = guy.fullName;
    var value = guy.fullName();
    console.log(value);
})(ch2_4_ambient_before || (ch2_4_ambient_before = {}));
