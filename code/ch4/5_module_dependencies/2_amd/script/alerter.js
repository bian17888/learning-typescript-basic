var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./dataService"], function (require, exports, ds) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ds = __importStar(ds);
    /// <reference path="../typings/jquery.d.ts" />
    var dataservice = new ds.DataService();
    var Alerter = /** @class */ (function () {
        function Alerter() {
            this.name = "Beck";
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataservice.getMessage();
            $("h2").text(msg + " " + this.name);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
//# sourceMappingURL=alerter.js.map