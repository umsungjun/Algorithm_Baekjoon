let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const line = input[1];

let sum = 0;

for (let i = 0; i < n; i++) {
  sum += Number(line[i]);
}

console.log(sum);
