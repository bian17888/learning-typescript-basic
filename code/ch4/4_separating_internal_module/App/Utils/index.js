"use strict";
var App;
(function (App) {
    var Utils;
    (function (Utils) {
        var Logger = /** @class */ (function () {
            function Logger(mode) {
                if (mode === void 0) { mode = App.LoggerMode.Console; }
                this.mode = mode;
                switch (this.mode) {
                    case App.LoggerMode.Console:
                        this.writer = function (msg) { return console.log(msg); };
                    case App.LoggerMode.Alert:
                        this.writer = function (msg) { return alert(msg); };
                }
            }
            Logger.prototype.write = function (msg) {
                this.writer(msg);
            };
            return Logger;
        }());
        Utils.Logger = Logger;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
//# sourceMappingURL=index.js.map