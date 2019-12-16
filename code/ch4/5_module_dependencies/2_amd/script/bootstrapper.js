var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./alerter"], function (require, exports, al) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    al = __importStar(al);
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
//# sourceMappingURL=bootstrapper.js.map