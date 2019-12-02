module ch3_4_interfaces {
  /**interface IEngine */
  interface IEngine {
    start(callback: (stopStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
  }

  /**Engine */
  class Engine implements IEngine {
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

    // todo : It will throw a error when you remove stop function
    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
      window.setTimeout(() => {
        callback(true, this.engineType);
      }, 1000);
    }
  }

  /**CustomEngine */
  class CustomEngine implements IEngine {
    start(callback: (stopStatus: boolean, engineType: string) => void): void {
      window.setTimeout(() => {
        callback(true, "Custom Engine");
      }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
      window.setTimeout(() => {
        callback(true, "Custom Engine");
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
    private _engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;

    constructor(
      basePrice: number,
      engine: IEngine,
      state: string,
      make: string,
      model: string,
      year: number
    ) {
      this.basePrice = basePrice;
      this.engine = engine;
      this.state = state;
      this.make = make;
      this.model = model;
      this.year = year;
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

    getAccessoryList(): string {
      return this.accessoryList;
    }

    get basePrice(): number {
      return this._basePrice;
    }

    set basePrice(value: number) {
      this._basePrice = value;
    }

    get engine(): IEngine {
      return this._engine;
    }

    set engine(value: IEngine) {
      if (value === undefined) {
        throw "Please supply an engine!";
      }
      this._engine = value;
    }
  }

  window.onload = function() {
    // todo : It will throw a error
    // var engine = new CustomEngine();
    // var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
    // alert(auto.engine.engineType.toString());

    // todo : There will still be errors, because new Auto accepts an IEngine type!
    // var engine = new Engine(150, "V9");
    // var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
    // alert(auto.engine.hoursePower.toString());

    // awesome
    var engine = new Engine(150, "V9");
    var auto = new Auto(40000, engine, "State", "Make", "Model", 2010);
    var myEngine = <Engine>auto.engine;
    alert(myEngine.hoursePower.toString());
  };
}
