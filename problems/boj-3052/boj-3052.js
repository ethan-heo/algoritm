/**
 * 백준 3052번 - 나머지
 * https://www.acmicpc.net/problem/3052
 */
function solution(input) {
	const numbers = input
		.trim()
		.split('\n')
		.map((char) => Number(char.trim()));
	const countingMap = new Map();
	const NUM = 42;

	for (const number of numbers) {
		countingMap.set(number % NUM, true);
	}

	return `${Array.from(countingMap.values()).length}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
