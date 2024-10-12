let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];

for (let i = 1; i <= n; i++) {
  if (!arr.includes(input[i])) {
    arr.push(input[i]);
  }
}

arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return a.length - b.length;
  }
});

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
