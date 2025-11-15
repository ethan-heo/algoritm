/**
 * 백준 9506번 - 약수들의 합
 * https://www.acmicpc.net/problem/9506
 */
function solution(input) {
	const numbers = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const result = [];

	for (const number of numbers) {
		if (number === -1) continue;
		const measures = new Set();

		for (let i = 1; i < number; i++) {
			if (number / i === Math.floor(number / i)) {
				measures.add(i);
			}
		}

		const arr = Array.from(measures.values());

		if (arr.reduce((acc, number) => acc + number, 0) === number) {
			result.push(`${number} = ${arr.sort((a, b) => a - b).join(' + ')}`);
		} else {
			result.push(`${number} is NOT perfect.`);
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
