module ch3_5_extend_interfaces {
  /**interface IEngine */
  interface IEngine {
    start(callback: (stopStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
  }

  interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
  }

  interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
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

    constructor(options: IAutoOptions) {
      this.basePrice = options.basePrice;
      this.engine = options.engine;
      this.state = options.state;
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
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

  class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;
    constructor(options: ITruckOptions) {
      super(options);
      this.bedLength = options.bedLength;
      this.fourByFour = options.fourByFour;
    }
  }

  window.onload = function() {
    var engine = new Engine(400, "V8");
    var truck = new Truck({
      basePrice: 40000,
      engine: engine,
      state: "Arizona",
      make: "Ford",
      model: "F-150",
      year: 2019,
      bedLength: "short bed",
      fourByFour: true
    });
    console.log(truck.bedLength);
    console.log(truck.engine);
  };
}
