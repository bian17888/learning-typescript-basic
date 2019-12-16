/// <reference path="../typings/jquery.d.ts" />
declare var $: JQueryStatic;

import * as ds from "./dataService";

var dataservice = new ds.DataService();

export interface IAlerter {
  name: string;
  showMessage(): void;
}

export class Alerter implements IAlerter {
  name: string;
  constructor() {
    this.name = "Beck";
  }
  showMessage() {
    const msg = dataservice.getMessage();
    $("h2").text(msg + " " + this.name);
  }
}
