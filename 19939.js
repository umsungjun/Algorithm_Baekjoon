const input = require("fs").readFileSync("/dev/stdin").toString();

// /* n: 공, k: 바구니 */
let [n, k] = input.split(" ").map(Number);

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

/* 1부터 k까지의 합이 n보다 크다면 나눠 담을 수 없음 */
if (sum > n) {
  console.log(-1);
} else {
  n -= sum;

  /* n이 1부터 K까지의 합보다 클 경우가 있기 때문에 n % k로 처리 */
  if (n % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
