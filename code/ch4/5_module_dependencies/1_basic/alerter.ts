/// <reference path="./dataService.ts" />

interface IAlerter {
  name: string;
  showMessage(): void;
}

var dataservice = new DataService();

class Alerter implements IAlerter {
  name: string;
  constructor() {
    this.name = "Beck";
  }
  showMessage() {
    const msg = dataservice.getMessage();
    alert(msg + " " + this.name);
  }
}
