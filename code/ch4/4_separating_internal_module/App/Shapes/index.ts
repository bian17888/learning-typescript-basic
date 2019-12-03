namespace App.Shapes {
  export interface IPoint {
    getDist(): number;
  }

  export interface IRectangle {
    height: number;
    width: number;
    getPerimeter(): number;
    getArea(): number;
  }

  export class Point implements IPoint {
    constructor(public x: number, public y: number) {}
    getDist() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

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
