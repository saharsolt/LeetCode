"use strict";
var start = Date.now();
const m = "MCMXCIV";
let s = m;
let digit = 0;
if (s.includes("IV")) {
  digit += 4;
  s = s.replace("IV", "");
}
if (s.includes("IX")) {
  digit += 9;
  s = s.replace("IX", "");
}
if (s.includes("XL")) {
  digit += 40;
  s = s.replace("XL", "");
}
if (s.includes("XC")) {
  digit += 90;
  s = s.replace("XC", "");
}
if (s.includes("CD")) {
  digit += 400;
  s = s.replace("CD", "");
}
if (s.includes("CM")) {
  digit += 900;
  s = s.replace("CM", "");
}
for (const item of s) {
  item === "M"
    ? (digit += 1000)
    : item === "D"
    ? (digit += 500)
    : item === "C"
    ? (digit += 100)
    : item === "L"
    ? (digit += 50)
    : item === "X"
    ? (digit += 10)
    : item === "V"
    ? (digit += 5)
    : item === "I"
    ? (digit += 1)
    : digit;
}

console.log(digit);
