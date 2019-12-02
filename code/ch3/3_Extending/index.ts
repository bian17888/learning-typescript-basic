module ch3_3_extending {
  /**Engine */
  class Engine {
    hoursePower: number;
    engineType: string;

    constructor(hoursePower: number, engineType: string) {
      this.hoursePower = hoursePower;
      this.engineType = engineType;
    }

    start(callback: (stopStatus: boolean, engineType: string) => void): void {
      window.setTimeout(() => {
        callback(true, this.engineType);
      }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
      window.setTimeout(() => {
        callback(true, this.engineType);
      }, 1000);
    }
  }

  /**Accessory */
  class Accessory {
    accessoryNumber: number;
    title: string;
    constructor(accessoryNumber: number, title: string) {
      this.accessoryNumber = accessoryNumber;
      this.title = title;
    }
  }

  /**Auto */
  class Auto {
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(
      basePrice: number,
      engine: Engine,
      make: string,
      model: string
    ) {
      this.basePrice = basePrice;
      this.engine = engine;
      this.make = make;
      this.model = model;
    }

    calculateTotal(): number {
      const taxRate = 0.08;
      return this.basePrice + taxRate * this.basePrice;
    }

    addAccesstories(...accesstories: Accessory[]) {
      this.accessoryList = "";
      for (var i = 0; i < accesstories.length; i++) {
        var ac = accesstories[i];
        this.accessoryList += ac.accessoryNumber + " " + ac.title + "<br /> ";
      }
    }

    get basePrice(): number {
      return this._basePrice;
    }

    set basePrice(value: number) {
      this._basePrice = value;
    }

    get engine(): Engine {
      return this._engine;
    }

    set engine(value: Engine) {
      if (value === undefined) {
        throw "Please supply an engine!";
      }
      this._engine = value;
    }
  }

  class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;
    constructor(
      basePrice: number,
      engine: Engine,
      make: string,
      model: string,
      bedLength: string,
      fourByFour: boolean
    ) {
      super(basePrice, engine, make, model);
      this.bedLength = bedLength;
      this.fourByFour = fourByFour;
    }
  }

  window.onload = function() {
    var engine = new Engine(300, "v8");
    // var auto = new Auto(40000, engine, "Chevy", "Silverado");
    // alert(auto.engine.engineType);

    var truck = new Truck(
      80000,
      engine,
      "Chevy",
      "Silverado",
      "Long Bed",
      true
    );
    alert(truck.engine.engineType);
    alert(truck.bedLength);
    alert(truck.calculateTotal().toString());

    truck.addAccesstories(
      new Accessory(1, "SunRoof"),
      new Accessory(2, "towing package")
    );
    alert(truck.accessoryList);

    truck.engine.start((stopStatus: boolean, engineType: string) => {
      alert(engineType + " was started!");
    });
  };
}
