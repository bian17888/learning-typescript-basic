class CarCh1 {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    alert("Engine started : " + this.engine);
  }

  stop() {
    alert("Engine stopped : " + this.engine);
  }
}

window.onload = function() {
  var car = new CarCh1("v8");
  car.start();
  car.stop();
};
