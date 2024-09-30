let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let answer = "";

for (let i = 1; i <= n; i++) {
  let text = "";
  const data = input[i].split(" ");
  const repeat = Number(data[0]);

  data[1].split("").forEach((s) => {
    for (let j = 0; j < repeat; j++) {
      text += s;
    }
  });
  answer += text + "\n";
}

console.log(answer);
