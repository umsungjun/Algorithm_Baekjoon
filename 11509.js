const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());

const balloonArr = input[0].split(" ").map(Number);

const arrowArr = Array(n + 1).fill(0);

let answer = 0;

for (let i = 0; i < n; i++) {
  if (arrowArr[balloonArr[i]] > 0) {
    arrowArr[balloonArr[i]] -= 1;
    arrowArr[balloonArr[i] - 1] += 1;
  } else {
    arrowArr[balloonArr[i] - 1] += 1;
    answer += 1;
  }
}

console.log(answer);
