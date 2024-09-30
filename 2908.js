let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n1, n2] = input[0].split(" ");

const reverseN1 = Number(n1.split("").reverse().join(""));
const reverseN2 = Number(n2.split("").reverse().join(""));

console.log(reverseN1 > reverseN2 ? reverseN1 : reverseN2);
