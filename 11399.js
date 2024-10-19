let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
  let hap = 0;
  for (let j = 0; j <= i; j++) {
    hap += data[j];
  }

  answer += hap;
}
console.log(answer);

// const test = () => {
//   const input = ["5", "3 1 4 3 2"];

//   const n = Number(input[0]);
//   const data = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);

//   let answer = 0;

//   for (let i = 0; i < n; i++) {
//     let hap = 0;
//     for (let j = 0; j <= i; j++) {
//       hap += data[j];
//     }

//     answer += hap;
//   }
//   console.log(answer);
// };

// test();
