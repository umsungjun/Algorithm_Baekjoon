let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let answer = "";

for (let i = 1; i <= n; i++) {
  let text = "";
  const [r, s] = input[i].split(" ");

  s.split("").forEach((str) => {
    text += str.repeat(r);
  });
  answer += text + "\n";
}

console.log(answer);
