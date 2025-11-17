/**
 * 백준 2581번 - 소수
 * https://www.acmicpc.net/problem/2581
 */
function solution(input) {
	const [min, max] = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const result = [];

	if (min === 1 && min === max) return `-1`;

	for (let i = min; i <= max; i++) {
		if (i === 1) continue;

		let isPrime = true;

		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			result.push(i);
		}
	}

	return result.length === 0
		? `-1`
		: `${result.reduce((acc, num) => acc + num, 0)}\n${Math.min(...result)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
