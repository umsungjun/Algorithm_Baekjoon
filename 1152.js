let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const data = input[0].trim().split(" ");

if (data == "") {
  console.log(0);
} else {
  console.log(data.length);
}
