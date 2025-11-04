/**
 * 백준 5597번 - 과제 안 내신 분
 * https://www.acmicpc.net/problem/5597
 */
function solution(input) {
	const arr = input
		.trim()
		.split('\n')
		.map((char) => Number(char.trim()));
	const countingMap = Array.from({ length: 30 }).reduce(
		(acc, _, idx) => (acc.set(idx + 1, false), acc),
		new Map()
	);
	const result = [];

	for (const value of arr) {
		countingMap.set(value, true);
	}

	for (const [key, value] of countingMap.entries()) {
		if (!value) {
			result.push(key);
		}
	}

	return result.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
