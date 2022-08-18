"use strict";
//const s = prompt("What is your Roman number?");
var s = "IVM";
let OBJ = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

let digit = 0;

while (s !== "") {
  digit += OBJ[s.substring(0, 2)] || OBJ[s[0]];
  s = OBJ[s[0] + s[1]] ? s.substring(2) : s.substring(1);
}

console.log(digit);
