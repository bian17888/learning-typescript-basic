/// <reference path="./App/index.ts" />

namespace ch4_4_separating_internal_module {
  import Shapes = App.Shapes;
  import Utils = App.Utils;

  //Wrapper will pull variables below out of the global scope
  ((): void => {
    var log = new Utils.Logger(App.LoggerMode.Console);

    var p: Shapes.IPoint = new Shapes.Point(3, 4);
    var dist = p.getDist();
    log.write("distance = " + dist);

    var rect: Shapes.IRectangle = new Shapes.Rectangle(10, 5);
    var perimeter = rect.getPerimeter();
    log.write("perimeter = " + perimeter);
  })();
}
