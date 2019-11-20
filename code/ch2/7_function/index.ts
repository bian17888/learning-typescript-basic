module ch2_7_function {
  /** group1 */
  var squareItSimple = function(h: number, w: number) {
    return h * w;
  };
  var squareItSimplest = (h: number, w: number) => h * w;

  var helloWorld: (name?: string) => void;
  helloWorld = (name?: string) => {
    console.log("Hello " + (name || "unknown person"));
  };
  helloWorld();
  helloWorld("beck");

  /**group2 */
  var squareIt: (rect: { h: number; w: number }) => number;
  var rectA = { h: 7 };
  var rectB = { h: 7, w: 11 };

  squareIt = function(rect) {
    return rect.h * rect.w;
  };
  console.log(squareIt(rectA));
  console.log(squareIt(rectB));
}
