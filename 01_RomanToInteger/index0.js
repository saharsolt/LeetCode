"use strict";

const s = "III";

let digit = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "M") digit += 1000;
  else if (s[i] === "D") digit += 500;
  else if (s[i] === "C") {
    if (s[i + 1] === "M" || s[i + 1] === "D") digit -= 100;
    else digit += 100;
  } else if (s[i] === "L") digit += 50;
  else if (s[i] === "X") {
    if (s[i + 1] === "L" || s[i + 1] === "C") digit -= 10;
    else digit += 10;
  } else if (s[i] === "V") digit += 5;
  else if (s[i] === "I") {
    if (s[i + 1] === "V" || s[i + 1] === "X") digit -= 1;
    else digit += 1;
  }
}
console.log(digit);
