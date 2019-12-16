import * as al from "./alerter";

export function run() {
  const alerter = new al.Alerter();
  alerter.showMessage();
}
