let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

/* 회문 판별 함수 */
const isPalindrome = (x) => {
  return x == x.split("").reverse().join("");
};

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  /* 문자열 하나씩 순회 */
  const data = input[i];

  if (isPalindrome(data)) {
    /* 회문 */
    console.log(0);
  } else {
    /* 유사 회문 검사 */
    let found = false;
    /* 문자열 길이 */
    let length = data.length;

    for (let i = 0; i < parseInt(length / 2); i++) {
      if (data[i] !== data[length - 1 - i]) {
        /* 대칭이 아닌 문자를 찾은 경우 */
        if (isPalindrome(data.slice(0, i) + data.slice(i + 1, length))) {
          found = true;
        }
        if (
          isPalindrome(
            data.slice(0, n - i - 1) + data.slice(length - i, length)
          )
        ) {
          found = true;
          break;
        }
      }
    }
    if (found) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
