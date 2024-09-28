let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const c = Number(input[0]);

for (let i = 1; i <= c; i++) {
  const data = input[i].split(" ").map(Number);
  /* 인원 수 */
  const n = Number(data[0]);
  let hap = 0;

  for (let j = 1; j <= n; j++) {
    hap += data[j];
  }

  const avg = parseInt(hap / n);
  let highN = 0;

  for (let j = 1; j <= n; j++) {
    if (data[j] > avg) {
      highN += 1;
    }
  }

  console.log(`${((highN / n) * 100).toFixed(3)}%`);
}
