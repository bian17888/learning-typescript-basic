module ch2_6_object {
  /* Object */

  var points1 = {
    x: 10,
    y: 20
  };
  var x = points1.x;

  var points2: Object;
  points2 = {
    x: 10,
    y: 20
  };
  // 比较代码提示 :  points1.  和 points2.

  var points3: Object = {
    x: 1
  };

  var rectangle = {
    h: 10,
    w: 20,
    calcArea: function() {
      return this.h * this.w;
    }
  };
  console.log(rectangle.calcArea());

  /* Functions */
  var squareIt1 = function(x) {
    return x * x;
  };
  var squareIt2 = function(x: number) {
    return x * x;
  };
  var sq1 = squareIt1("beck");
  // var sq2 = squareIt2("beck");
  var sq2 = squareIt2(4);
  console.log("squareIt1 = " + sq1);
  console.log("squareIt2 = " + sq2);

  // ** KP : 可选参数
  var squareIt3 = function(rect: { h: number; w?: number }) {
    if (rect.w === undefined) {
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
  };
  var sq31 = squareIt3({ h: 10 });
  console.log("rectangle h and w of 10 = " + sq31);
  var sq32 = squareIt3({ h: 10, w: 20 });
  console.log("rectangle h and w of 10 and 20 = " + sq32);
}
