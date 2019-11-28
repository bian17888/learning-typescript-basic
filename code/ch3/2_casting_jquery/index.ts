/// <reference path="./types/jquery.d.ts" />

module ch3_2_casting_jquery {
  $(document).ready(function() {
    var calc = new Calculator("x", "y", "result");
  });

  class Calculator {
    private x: JQuery;
    private y: JQuery;
    private result: JQuery;

    constructor(xId: string, yId: string, resultId: string) {
      this.x = $("#" + xId);
      this.y = $("#" + yId);
      this.result = $("#" + resultId);
      this.init();
    }

    init() {
      $("#add").click(event => {
        let result = this.add(parseInt(this.x.val()), parseInt(this.y.val()));
        this.result.html(result.toString());
      });

      $("#subtract").click(event => {
        let result = this.subtract(
          parseInt(this.x.val()),
          parseInt(this.y.val())
        );
        this.result.html(result.toString());
      });
    }

    add(x: number, y: number): number {
      return x + y;
    }

    subtract(x: number, y: number): number {
      return x - y;
    }
  }
}
