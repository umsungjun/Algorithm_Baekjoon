let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  arr.push([x, y]);
}

const compare = (a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
};

arr.sort(compare);

let answer = "";

for (let point of arr) {
  answer += `${point[0]} ${point[1]}\n`;
}

console.log(answer);
