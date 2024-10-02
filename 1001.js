let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const data = input[0].split(" ").map(Number);

console.log(data[0] - data[1]);
