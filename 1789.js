let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let current = 0;
let sum = 0;

/* 단축 정답 */
while (sum <= n) {
  current += 1;
  sum += current;
}

console.log(current - 1);
