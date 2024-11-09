// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const test = () => {
  const input = ["5", "2 1 5 4 3"];

  const data = input[1].split(" ").map(Number);

  let index = 0;
  while (data.length > 0) {
    if (data[index] === data[index + 1] - 1) {
      data.splice(index, 1);
    }
  }
};

test();
