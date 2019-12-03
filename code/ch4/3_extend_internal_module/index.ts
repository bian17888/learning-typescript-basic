//Extending Internal modules
namespace App.Tools.Utils {
  export interface ILogger {
    write: (msg: string) => void;
  }

  export var LoggerModel = {
    Console: 1,
    Alert: 2
  };

  export class Logger implements ILogger {
    private writer: any;

    constructor(public mode: number = LoggerModel.Console) {
      switch (this.mode) {
        case LoggerModel.Console:
          this.writer = (msg: string) => console.log(msg);
        case LoggerModel.Alert:
          this.writer = (msg: string) => alert(msg);
      }
    }

    write(msg: string) {
      this.writer(msg);
    }
  }
}

/**Part A : Class Point */
interface IPoint {
  getDist(): number;
}

namespace App.Tools.Shapes {
  export class Point implements IPoint {
    constructor(public x: number, public y: number) {}
    getDist() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
}

/**Part B : Class Rectangle */
interface IRectangle {
  height: number;
  width: number;
  getPerimeter(): number;
  getArea(): number;
}

namespace App.Tools.Shapes {
  export class Rectangle implements IRectangle {
    constructor(public height: number, public width: number) {}
    getPerimeter() {
      return this.height * 2 + this.width * 2;
    }
    getArea() {
      return this.height * this.width;
    }
  }
}

///////////////
import Tools = App.Tools;
import Utils = App.Tools.Utils;

//Wrapper will pull variables below out of the global scope
((): void => {
  var log = new Utils.Logger(Utils.LoggerModel.Console);

  var p: IPoint = new Tools.Shapes.Point(3, 4);
  var dist = p.getDist();
  log.write("distance = " + dist);

  var rect: IRectangle = new Tools.Shapes.Rectangle(10, 5);
  var perimeter = rect.getPerimeter();
  log.write("perimeter = " + perimeter);
})();
