let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.split("\n");

const test = () => {
  const solution = (graph, n, m, x, y) => {
    /* 주어진 범위를 벗어나는 경우 즉시 종료 */
    if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

    /* 현재 노드를 방문 처리하지 않았다면 */
    if (graph[x][y] === 1) {
      graph[x][y] = -1; // 방문 처리
      /* 상, 하, 좌, 우 재귀 호출 */
      /* 상 */
      solution(graph, n, m, x - 1, y);
      /* 하 */
      solution(graph, n, m, x + 1, y);
      /* 좌 */
      solution(graph, n, m, x, y - 1);
      /* 우 */
      solution(graph, n, m, x, y + 1);
      return true;
    }
    return false;
  };

  let testCase = Number(input[0]);
  let line = 1;

  while (testCase--) {
    /* 가로 길이(m), 세로 길이(n), 배추가 심어져 있는 위치의 갯수(k) */
    let [m, n, k] = input[line].split(" ").map(Number);
    let graph = [];

    /* graph 배열 초기화 */
    for (let i = 0; i < n; i++) {
      graph[i] = new Array(m);
    }

    for (let i = 1; i <= k; i++) {
      let [x, y] = input[line + i].split(" ").map(Number);
      graph[y][x] = 1;
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (solution(graph, n, m, i, j)) {
          answer++;
        }
      }
    }
    line += k + 1;
    console.log(answer);
  }
};

test();
