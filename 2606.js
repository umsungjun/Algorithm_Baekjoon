// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const test = () => {
  const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split("\n");

  // 반복 횟수
  const n = 2 + Number(input[1]);
  const arr = new Set([1]);

  for (let i = 2; i < n; i++) {
    const [x1, x2] = input[i].split(" ").map(Number);

    if (arr.has(x1)) {
      arr.add(x2);
    }
  }

  console.log(arr.size - 1);
};

test();
