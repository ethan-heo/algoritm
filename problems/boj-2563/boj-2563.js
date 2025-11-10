/**
 * 백준 2563번 - 색종이
 * https://www.acmicpc.net/problem/2563
 */
function solution(input) {
	let [count, ...positions] = input.trim().split('\n');

	positions = positions.map((position) => position.trim().split(' ').map(Number));
	count = Number(count.trim());

	const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

	for (const [x, y] of positions) {
		for (let i = x; i < x + 10; i++) {
			for (let j = y; j < y + 10; j++) {
				paper[i][j] = true;
			}
		}
	}

	let result = 0;

	for (let i = 0; i < 100; i++) {
		for (let j = 0; j < 100; j++) {
			if (paper[i][j]) result++;
		}
	}

	return `${result}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
