/**
 * 백준 2447번 - 별 찍기 - 10
 * https://www.acmicpc.net/problem/2447
 *
 * Claude 코드의 도움을 받음.
 * - N x N의 2차원 배열을 만든 후 *로 채워놓는다. 그리고 재귀를 통해 빈 공간을 채우는 방식으로 접근
 *
 * 재귀
 * 1. 주어진 시작 좌표(x,y), 사이즈를 통해 가운데 영역(빈 공간)을 채운다.
 * 	- 시작 좌표는 3의 제곱근 크기에 비례한다.
 * 2. 가운데를 제외한 나머지 영역에 새로운 좌표와 사이즈를 주어 재귀
 *
 */
function solution(input) {
	const n = Number(input);
	const board = Array.from({ length: n }, () => Array(n).fill('*'));

	const punch = (x, y, size) => {
		if (size === 1) return;

		const newSize = size / 3;

		// 가운데 뚫기
		for (let i = x + newSize; i < x + newSize * 2; i++) {
			for (let j = y + newSize; j < y + newSize * 2; j++) {
				board[i][j] = ' ';
			}
		}

		// 나머지 8개 블록 재귀
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (i === 1 && j === 1) continue; // 가운데 스킵
				punch(x + i * newSize, y + j * newSize, newSize);
			}
		}
	};

	punch(0, 0, n);
	return board.map((row) => row.join('')).join('\n');
}
module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
