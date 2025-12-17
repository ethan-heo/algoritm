/**
 * 백준 2485번 - 가로수
 * https://www.acmicpc.net/problem/2485
 */
function solution(input) {
	const [, ...trees] = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));

	const spaces = [];

	for (let i = 0, len = trees.length; i < len; i++) {
		const nextTree = trees[i + 1];

		if (!nextTree) continue;

		spaces.push(trees[i + 1] - trees[i]);
	}

	let gcd;

	for (let i = Math.min(...spaces); i > 0; i--) {
		if (spaces.every((space) => space % i === 0)) {
			gcd = i;
			break;
		}
	}

	return spaces.reduce((acc, space) => acc + (space / gcd - 1), 0).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
