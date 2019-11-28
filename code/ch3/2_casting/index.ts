module ch3_2_casting {
  window.onload = function() {
    var calc = new Calculator("x", "y", "result");
  };

  class Calculator {
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private result: HTMLSpanElement;

    constructor(xId: string, yId: string, resultId: string) {
      this.x = <HTMLInputElement>document.getElementById(xId);
      this.y = <HTMLInputElement>document.getElementById(yId);
      this.result = <HTMLSpanElement>document.getElementById(resultId);
      this.init();
    }

    init() {
      document.getElementById("add").addEventListener("click", event => {
        let result = this.add(parseInt(this.x.value), parseInt(this.y.value));
        this.result.innerHTML = result.toString();
      });

      document.getElementById("subtract").addEventListener("click", event => {
        let result = this.subtract(
          parseInt(this.x.value),
          parseInt(this.y.value)
        );
        this.result.innerHTML = result.toString();
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
