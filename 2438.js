let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let answer = ``;

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  answer += `${star}\n`;
}

console.log(answer);
