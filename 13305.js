/* 17점 짜리 정답 */
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// /* 도로간 거리 */
// const length = input[1].split(" ").map(Number);
// /* 주유소 가격 */
// const stage = input[2].split(" ").map(Number);

// let curLength = 0;
// let minStage = 999;
// let answer = 0;

// for (let i = 0; i < stage.length - 1; i++) {
//   if (stage[i] < minStage) {
//     minStage = stage[i];
//   }

//   answer += parseInt(minStage * length[curLength]);
//   curLength++;
// }

// console.log(answer);

// BigInt를 활용한 풀이
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dist = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);

let answer = BigInt(0);
let minCost = BigInt(cost[0]);

for (let i = 0; i < dist.length; i++) {
  if (BigInt(cost[i]) < BigInt(minCost)) {
    minCost = BigInt(cost[i]);
  }

  answer += BigInt(dist[i]) * BigInt(minCost);
}

console.log(answer.toString()); //  문자로 만들면 BigInt 'n' 제거 됨
