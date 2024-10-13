/* 첫번째 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const originalArr = input[1].split(" ").map(Number);
const arr = [];

for (let i = 0; i < n; i++) {
  if (!arr.includes(originalArr[i])) {
    arr.push(originalArr[i]);
  }
}

const answer = [];

for (let i = 0; i < n; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (originalArr[i] !== arr[j]) {
      if (originalArr[i] > arr[j]) {
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join(" "));
 */

/* sort정렬을 활용한 풀이 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);

const uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

const myMap = new Map();

for (let i = 0; i < uniqueArr.length; i++) {
  myMap.set(uniqueArr[i], i);
}

let answer = "";

for (let num of arr) {
  answer += myMap.get(num) + " ";
}

console.log(answer);
