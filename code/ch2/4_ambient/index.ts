/// <reference path="./typings/knockout.d.ts" />

declare var ko: KnockoutStatic;

module ch2_4_ambient_before {
  var name = ko.observable("beck");
  var id = ko.observable(1);
  var guy = {
    id: id,
    fullName: name
  };

  // var value: string = guy.fullName;
  var value: string = guy.fullName();
  console.log(value);
}
