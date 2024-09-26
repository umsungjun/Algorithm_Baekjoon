let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let hap = 0;

for (let i = 1; i <= num; i++) {
  hap += i;
}
console.log(hap);

/* 한줄 풀이 - 등차수열 */
console.log((num * (num + 1)) / 2);
