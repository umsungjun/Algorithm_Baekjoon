let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxValue = 0;
let maxValueIndex = 0;

input.forEach((num, index) => {
  if (Number(num) > maxValue) {
    maxValue = Number(num);
    maxValueIndex = index;
  }
});

console.log(maxValue);
console.log(maxValueIndex + 1);
