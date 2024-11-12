const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/* 피보나치 배열 */
const pibo = [0, 1];

/* 주어지는 수들의 최대 값이 1억 미만이기 때문에 다음과 같은 조건을 줌 */
while (pibo[pibo.length - 1] <= 1e9) {
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
}

const n = Number(input[0]);
const answerArr = [];

for (let i = 1; i <= n; i++) {
  let value = Number(input[i]);
  let arr = [];

  while (value !== 0) {
    for (let j = pibo.length; j > 0; j--) {
      if (Number(pibo[j]) <= value) {
        value -= Number(pibo[j]);
        arr.push(Number(pibo[j]));
        break;
      }
    }
  }
  arr.sort((a, b) => a - b);
  answerArr.push(arr);
}
let answer = ``;

answerArr.forEach((arr) => (answer += `${arr.join(" ")}\n`));
console.log(answer);
