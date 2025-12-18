/**
 * 백준 4134번 - 다음 소수
 * https://www.acmicpc.net/problem/4134
 */
function solution(input) {
	const [, ...numbers] = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const result = [];

	for (const number of numbers) {
		let i = 0;

		while (true) {
			const _number = number + i++;

			if (_number < 2) continue;

			let isPrime = true;

			for (let j = 2, len = Math.sqrt(_number); j <= len; j++) {
				if (_number % j === 0) {
					isPrime = false;
					break;
				}
			}

			if (isPrime) {
				result.push(_number);
				break;
			}
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
