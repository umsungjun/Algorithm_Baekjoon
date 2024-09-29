let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

/* 점수 배열 */
const score = input[1].split(" ").map(Number);
/* 최고점수 */
const maxScore = Math.max(...score);
/* 새로운 평균점수 배열 */
const newScore =
  score
    .map((score) => (score / maxScore) * 100)
    .reduce((acc, cur) => (acc += cur), 0) / score.length;

console.log(newScore);
