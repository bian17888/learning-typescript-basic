interface IRectangle {
  height: number;
  width: number;
  getArea(): number;
}

namespace Shapes {
  export class Rectangle implements IRectangle {
    constructor(public height: number, public width: number) {}
    getArea() {
      return this.height * this.width;
    }
  }
}

namespace myProgram {
  init();
  function init() {
    var rect: IRectangle = new Shapes.Rectangle(10, 4);
    alert(rect.getArea());
  }
}
