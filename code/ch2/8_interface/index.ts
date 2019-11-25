module ch2_8_interface {
  /**function types */
  interface SquareFunction {
    (x: number): number;
  }
  var squareItBasic: SquareFunction = num => num * num;

  /**interface Rectangle (Object) */
  interface Rectangle {
    h: number;
    w?: number;
  }

  var squareIt: (rect: Rectangle) => number;
  // var squareIt: (rect: { h: number; w?: number }) => number;
  var rectA = { h: 7 };
  var rectB = { h: 7, w: 12 };

  squareIt = function(rect) {
    if (rect.w !== undefined) {
      return rect.w * rect.h;
    }
    return rect.h * rect.h;
  };

  console.log(squareIt(rectA));
  console.log(squareIt(rectB));

  /**interface Person (Object) */
  interface Person {
    name: string;
    age: number;
    kids?: number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
  }

  var person: Person = {
    name: "Colleen",
    age: 40,
    kids: 4,
    calcPets: function() {
      if (this.kids !== undefined) {
        return this.kids * 2;
      }
      return 0;
    },
    makeYounger: function(years: number) {
      this.age -= years;
    },
    greet: function(msg: string) {
      return msg + " " + this.name;
    }
  };

  var pets = person.calcPets();
  person.makeYounger(15);
  var msg = person.greet("Good day to you ");
  console.log(pets);
  console.log(msg);

  /**interface SessionEval */
  interface SessionEval {
    addRating: (rating: number) => void;
    calcRating: () => number;
  }

  function sessionEvaluator(): SessionEval {
    var ratings: number[] = [];
    var addRating = (rating: number = 5) => {
      ratings.push(rating);
      return;
    };
    var calcRating = () => {
      var sum: number = 0;
      ratings.forEach(function(score) {
        sum += score;
      });
      return sum / ratings.length;
    };
    return {
      addRating: addRating,
      calcRating: calcRating
    };
  }

  var s = sessionEvaluator();
  s.addRating(4);
  s.addRating(5);
  s.addRating(5);
  console.log(s.calcRating());
}
