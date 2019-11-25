"use strict";
var ch2_8_interface;
(function (ch2_8_interface) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    // var squareIt: (rect: { h: number; w?: number }) => number;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.w * rect.h;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    var person = {
        name: "Colleen",
        age: 40,
        kids: 4,
        calcPets: function () {
            if (this.kids !== undefined) {
                return this.kids * 2;
            }
            return 0;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + " " + this.name;
        }
    };
    var pets = person.calcPets();
    person.makeYounger(15);
    var msg = person.greet("Good day to you ");
    console.log(pets);
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            ratings.push(rating);
            return;
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
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
})(ch2_8_interface || (ch2_8_interface = {}));
//# sourceMappingURL=index.js.map