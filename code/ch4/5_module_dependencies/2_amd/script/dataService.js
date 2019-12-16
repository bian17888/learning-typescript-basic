define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService() {
            this.msg = "Welcome to the Show!";
        }
        DataService.prototype.getMessage = function () {
            return this.msg;
        };
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=dataService.js.map