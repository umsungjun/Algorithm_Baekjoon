let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");
let secLine = input[1].split(" ");

let hour = Number(line[0]);
let min = Number(line[1]) + Number(secLine[0]);

if (min >= 60) {
  hour += parseInt(min / 60);
  min %= 60;
}

if (hour >= 24) {
  hour -= 24;
}

console.log(`${hour} ${min}`);
