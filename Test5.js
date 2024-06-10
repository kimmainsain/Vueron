const input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const matrix = input.slice(1).map((v) => v.split("").map(Number));
const visited = new Array(n).fill(false).map((_) => new Array(n).fill(false));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
const qu = [];

function validation(nexty, nextx) {
  if (nexty < 0 || nexty > n - 1 || nextx < 0 || nextx > n - 1) return false;
  if (visited[nexty][nextx]) return false;
  if (matrix[nexty][nextx] === 0) return false;
  return true;
}

function bfs(y, x) {
  visited[y][x] = true;
  qu.push({ y: y, x: x });
  let count = 1;
  while (qu.length !== 0) {
    const now = qu.pop();
    for (let i = 0; i < 4; i++) {
      const nexty = now.y + dy[i];
      const nextx = now.x + dx[i];
      if (!validation(nexty, nextx)) continue;
      visited[nexty][nextx] = true;
      qu.push({ y: nexty, x: nextx });
      count++;
    }
  }
  return count;
}

function solution() {
  const ascCount = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === true || matrix[i][j] === 0) continue;
      ascCount.push(bfs(i, j));
    }
  }
  ascCount.sort((a, b) => a - b);
  return ascCount.length + "\n" + ascCount.join("\n");
}

console.log(solution(input));
