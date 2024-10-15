let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const answer = input
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(answer);
