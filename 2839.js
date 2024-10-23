let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]); // 18
let answer = 0;

while (num > 3) {
  if (num - 5 >= 5 && num % 3 !== 0) {
    num -= 5;
    answer += 1;
  } else {
    num -= 3;
    answer += 1;
  }
}

if (num > 0) {
  console.log(-1);
} else {
  console.log(answer);
}
