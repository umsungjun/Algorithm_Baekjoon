let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const arr = [];

for (let i = 1; i <= n; i++) {
  const [age, name] = input[i].split(" ");

  arr.push([Number(age), name]);
}

arr.sort((a, b) => {
  if (a[0] > b[0]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  } else {
    return 0;
  }
});

let answer = "";

for (let i = 0; i < n; i++) {
  answer += `${arr[i][0]} ${arr[i][1]}\n`;
}

console.log(answer);
