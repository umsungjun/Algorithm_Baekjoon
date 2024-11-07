const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 제일 첫 째줄 n을 제거해야됨;;;;
const data = input.map((str) => str.split(" ").map(Number)).slice(1);

data.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let answer = 1;
let cur = 0;

for (let i = 1; i < data.length; i++) {
  if (data[cur][1] <= data[i][0]) {
    cur = i;
    answer += 1;
  }
}
console.log(answer);
