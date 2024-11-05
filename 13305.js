/* 17점 짜리 정답 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/* 도로간 거리 */
const length = input[1].split(" ").map(Number);
/* 주유소 가격 */
const stage = input[2].split(" ").map(Number);

let curLength = 0;
let minStage = 999;
let answer = 0;

for (let i = 0; i < stage.length - 1; i++) {
  if (stage[i] < minStage) {
    minStage = stage[i];
  }

  answer += parseInt(minStage * length[curLength]);
  curLength++;
}

console.log(answer);
