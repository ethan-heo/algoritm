/**
 * 백준 2444번 - 별찍기 - 7
 * https://www.acmicpc.net/problem/2444
 */
function solution(input) {
	const len = Number(input);
	let result = [];

	for (let i = 0; i < len; i++) {
		result.push(' '.repeat(len - i - 1) + '*'.repeat(2 * i + 1));
	}

	for (let i = len - 1; i > 0; i--) {
		result.push(' '.repeat(len - i) + '*'.repeat(2 * i - 1));
	}

	console.log(result.join('\n'));
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	console.log(solution(input));
}
