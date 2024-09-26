let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
let answer = ``;

for (let i = 1; i <= n; i++) {
  const data = input[i].split(" ");

  answer += Number(data[0]) + Number(data[1]) + "\n";
}

console.log(answer);
