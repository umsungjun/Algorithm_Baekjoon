let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[1].split(" ");

console.log(`${Math.min(...line)} ${Math.max(...line)}`);
