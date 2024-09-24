let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let hour = Number(line[0]);
let min = Number(line[1]);

/* 
오답
if (hour == 0) {
  hour = 24;
}

if (min >= 45) {
  min -= 45;
} else {
  hour -= 1;
  min += 15;
} */

if (min < 45) {
  hour -= 1;
  min += 15;
  if (hour < 0) {
    hour = 23;
  }
} else {
  min -= 45;
}

console.log(`${hour} ${min}`);
