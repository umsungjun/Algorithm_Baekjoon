let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let answer = "";

// forEach를 사용해 순회
arr.forEach((num) => {
  answer += num + "\n";
});

console.log(answer);
