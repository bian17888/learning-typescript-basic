"use strict";
/// <reference path="./typings/require.d.ts" />
require.config({
    baseUrl: "./script",
    shim: {
        jquery: {
            exports: "$"
        }
    },
    paths: {
        jquery: "../libs/jquery"
    }
});
require(["bootstrapper", "jquery"], function (bootstrapper, $) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map