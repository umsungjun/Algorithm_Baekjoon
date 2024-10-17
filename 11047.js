let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

/* n = 동전 갯수, k = 값 */
let [n, k] = input[0].split(" ").map(Number);

let answer = 0;
for (let i = n; i > 0; i--) {
  const coin = Number(input[i]);
  if (coin <= k) {
    answer += parseInt(k / coin);
    k %= coin;
  }
}

console.log(answer);
