"use strict";
/// <reference path="./dataService.ts" />
var dataservice = new DataService();
var Alerter = /** @class */ (function () {
    function Alerter() {
        this.name = "Beck";
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        alert(msg + " " + this.name);
    };
    return Alerter;
}());
//# sourceMappingURL=alerter.js.map