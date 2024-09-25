let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = input[0].split(" ");

const a = Number(number[0]);
const b = Number(number[1]);
const c = Number(number[2]);

if (a === b && a === c && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  const bigNum = Math.max(...number);
  console.log(bigNum * 100);
}
