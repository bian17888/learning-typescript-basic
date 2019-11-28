module ch3_1_definingClasses {
  class Engine {
    hoursePower: number;
    engineType: string;
    constructor(hoursePower: number, engineType: string) {
      this.hoursePower = hoursePower;
      this.engineType = engineType;
    }
  }

  class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
      this._engine = engine;
    }

    get engine(): Engine {
      return this._engine;
    }

    set engine(value: Engine) {
      if (value === undefined) {
        throw "Please supply a engine!";
      }
      this._engine = value;
    }

    start(): void {
      alert("Car Engine started " + this._engine.engineType);
    }
  }

  window.onload = function() {
    var engine = new Engine(800, "v8");
    var car = new Car(engine);

    alert(car.engine.engineType);
    car.start();
  };
}
