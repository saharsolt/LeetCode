"use strict";
const s = prompt("What is your Roman number?");

let digit = 0;
for (let i = 0; i < s.length; i++) {
  digit =
    s[i] === "M"
      ? digit + 1000
      : s[i] === "D"
      ? digit + 500
      : s[i] === "C"
      ? s[i + 1] === "M" || s[i + 1] === "D"
        ? digit - 100
        : digit + 100
      : s[i] === "L"
      ? digit + 50
      : s[i] === "X"
      ? s[i + 1] === "L" || s[i + 1] === "C"
        ? digit - 10
        : digit + 10
      : s[i] === "V"
      ? digit + 5
      : s[i] === "I"
      ? s[i + 1] === "V" || s[i + 1] === "X"
        ? digit - 1
        : digit + 1
      : digit;
}
console.log(digit);
