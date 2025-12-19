/**
 * 백준 4948번 - 베르트랑 공준
 * https://www.acmicpc.net/problem/4948
 */
function solution(input) {
	const numbers = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const result = [];

	numbers.pop();

	for (const number of numbers) {
		let primes = 0;

		for (let i = number + 1, len = number * 2; i <= len; i++) {
			if (i < 2) continue;

			let isPrime = true;

			for (let j = 2, len = Math.sqrt(i); j <= len; j++) {
				if (i % j === 0) {
					isPrime = false;
					break;
				}
			}

			if (isPrime) primes++;
		}

		result.push(primes);
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
