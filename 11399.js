// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const n = Number(input[0]);
// const data = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// let answer = 0;

// for (let i = 0; i < n; i++) {
//   let hap = 0;
//   for (let j = 0; j <= i; j++) {
//     hap += data[j];
//   }

//   answer += hap;
// }
// console.log(answer);

/* 이중 반복을 사용하지 않는 방법 */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let summary = 0;

// data [ 1, 2, 3, 3, 4 ]

for (let i = 0; i < n; i++) {
  summary += data[i]; // 1 3 6 9 13
  answer += summary; // 1 4 10 19 32
}
console.log(answer);
