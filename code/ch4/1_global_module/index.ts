namespace ch4_1_global_module {
  interface IPoint {
    getDist(): number;
  }

  class Point implements IPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    getDist() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  // todo : terrible - you can get it with using 'window.dist'
  var p: Point = new Point(3, 4);
  var dist = p.getDist();

  alert(dist);
}
