let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let b = input[1];

const firGob = a * Number(b[2]);
const secGob = a * Number(b[1]);
const thiGob = a * Number(b[0]);

console.log(firGob);
console.log(secGob);
console.log(thiGob);
console.log(a * Number(b));
