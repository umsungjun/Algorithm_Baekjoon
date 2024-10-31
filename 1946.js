// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const test = () => {
  const input = [
    "2",
    "5",
    "3 2",
    "1 4",
    "4 1",
    "2 3",
    "5 5",
    "7",
    "3 6",
    "7 3",
    "4 2",
    "1 4",
    "5 7",
    "2 5",
    "6 1",
  ];

  const data = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i].length === 1) {
      data.push(
        input.slice(i + 1, i + Number(input[i]) + 1).map((str) => {
          return str.split(" ").map(Number).sort();
        })
      );
    }
  }

  data.map((arr) => {
    return arr.sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] === b[0]) {
        if (a[1] > b[1]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    });
  });

  console.log(data);

  data.forEach((arr) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(1)) {
        cnt++;
      } else {
        for (let j = i - 1; 0 <= j; j--) {
          const n = arr[i][0]; // 비교 큰값
          if (arr[j][0] < n && arr[j][1] < n) {
            console.log(arr[j][0], arr[j][1]);
          }
        }
        cnt++;
      }
    }
    // console.log(cnt);
  });
};

test();
