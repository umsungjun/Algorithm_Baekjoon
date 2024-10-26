let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ");

let cnt = 0;
while (Number(b) > Number(a)) {
  if (b.slice(-1) == 1) {
    b = b.slice(0, -1);
    cnt += 1;
  } else if (Number(b) % 2 === 0) {
    b = parseInt(b / 2).toString();
    cnt += 1;
  } else {
    console.log(-1);
  }
}

if (a == b) {
  console.log(cnt + 1);
} else {
  console.log(-1);
}
