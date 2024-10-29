let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let sum = 0;
let i = 1;
while (sum < n) {
  sum += i;
  if (sum > n) {
    break;
  }
  i++;
}
console.log(i - 1);
