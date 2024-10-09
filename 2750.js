let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  answer.push(Number(input[i]));
}

answer.sort((a, b) => a - b);

answer.forEach((num) => {
  console.log(num);
});
