module ch2_5_primitives {
  // any
  var data: any;
  var info;
  var doSomething = function(arg) {
    return arg;
  };
  // var result = doSomething("hi");

  // primitives
  var age: number = 21;
  var score = 3.14;
  var rating = 99.99;

  var hasData: boolean = true;
  var isReady = true;
  var isBald = function() {
    return "yes";
  };
  var hasHair = !!isBald();

  var firstName: string = "Kai";
  var lastName = "bian";

  // string array
  function getArrayLength(x: string[]) {
    var result: number = x.length;
    return result;
  }
  var names: string[] = ["A", "B", "C", "D"];
  var firstLetter = names[0];
  var namesLen = getArrayLength(names);

  // null
  var guitarSales: any = null;
  var animal = null;
  var orderDate: Date = null;

  // undefined
  var quanlity: number;
  var company = undefined;
  console.log("undefined examples");
  console.log(quanlity);
  console.log(company);
}
