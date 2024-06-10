const input = require("fs").readFileSync("input.txt").toString().trim();

const n = parseInt(input);
let i = 0;
const matrix = new Array(n).fill(0).map((_) => new Array(n).fill(0));

function formatNumber(num) {
  if (n < 10) return num < 10 ? `0${num}` : `${num}`;
  if (num < 10) return `00${num}`;
  if (num < 100) return `0${num}`;
  return `${num}`;
}

function solution() {
  let count = 1;
  let max = n;
  let x = -1;
  let y = 0;
  let dir = 0;

  while (count < n * n + 1) {
    if (dir === 0) {
      for (let i = 0; i < max; i++) matrix[y][++x] = formatNumber(count++);
      max--;
    } else if (dir === 1) {
      for (let i = 0; i < max; i++) matrix[++y][x] = formatNumber(count++);
    } else if (dir === 2) {
      for (let i = 0; i < max; i++) matrix[y][--x] = formatNumber(count++);
      max--;
    } else if (dir === 3) {
      for (let i = 0; i < max; i++) matrix[--y][x] = formatNumber(count++);
    }
    dir = (dir + 1) % 4;
  }
  return matrix.map((row) => row.join(" ")).join("\n");
}

console.log(solution(input));
