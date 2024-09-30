// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const test = () => {
  const input = ["4", "aba", "abab", "abcabc", "a"];

  let answer = Number(input[0]);

  for (let i = 1; i < input.length; i++) {
    const arr = [];
    for (let j = 0; j < input[i].length; j++) {
      if (!arr.includes(input[i][j])) {
        arr.push(input[i][j]);
      } else {
        if (input[i][j] !== input[i][j - 1]) {
          answer -= 1;
          break;
        }
      }
    }
  }
  console.log(answer);
};

test();
