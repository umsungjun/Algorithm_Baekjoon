// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const test = () => {
  const input = [
    "7",
    "abba",
    "summuus",
    "xabba",
    "xabbay",
    "comcom",
    "comwwmoc",
    "comwwtmoc",
  ];

  const n = Number(input[0]);
  let result = "";

  for (let i = 1; i <= n; i++) {
    let answer = 2;
    const text = input[i];
    /* 문자 길이 */
    const textLength = text.length;

    if (textLength % 2 === 0) {
      // 문자 길이가 짝수인 경우
      const centerIndex = textLength / 2;

      const str1 = text.substring(0, centerIndex);
      const str2 = text.substring(centerIndex);
      console.log(str1, str2);
      if (str1 === str2) {
        answer = 1;
      }
    } else {
      // 문자 길이가 홀수인 경우
      const centerIndex = Math.floor(textLength / 2);

      const str1 = text.substring(0, centerIndex);
      const str2 = text.substring(centerIndex + 1);

      if (str1 === str2) {
        answer = 1;
      }
    }

    result += answer + "\n";
  }
  console.log(result);
};

test();
