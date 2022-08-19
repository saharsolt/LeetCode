"Use strict";
//Find the longest common prefix string amongst an array of strings
const strs = ["floweryan", "flowerigol", "flower", "flowerkkkk"];
let shadowCopy = strs.slice();
let len = strs[0].length;
let word = "";
let prefix;

shadowCopy.forEach(function (str, i) {
  if (len >= str.length) {
    len = str.length;
    word = str;
  }
});
const fixedLen = len;
for (let i = 0; i < fixedLen; i++) {
  shadowCopy.forEach(function (str, i) {
    prefix = str.startsWith(word);
    if (!prefix) {
      len--;
      word = word.substring(0, len);
    }
  });
}
console.log(word);
