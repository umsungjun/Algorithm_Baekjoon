let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]); // 컴퓨터 개수
const m = Number(input[1]); //간선의 개수

const graph = []; // 그래프 정보

/* 컴퓨터 개수만큼 [] 배열 생성 */
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

/* 인접 리스트 생성 */
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
/* 방문 노드 생성 */
let visited = new Array(n + 1).fill(false); // [false, false, false, false, false, false, false, false]

function dfs(x) {
  visited[x] = true; // 방문 노드 true 처리
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) {
      dfs(y);
    }
  }
}

dfs(1);

console.log(cnt - 1);
