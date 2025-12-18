/**
 * 백준 1929번 - 소수 구하기
 * https://www.acmicpc.net/problem/1929
 */
function solution(input) {
	const [start, end] = input.split(' ').map(Number);
	const result = [];

	for (let i = start; i <= end; i++) {
		if (i < 2) continue;

		let isPrime = true;

		for (let j = 2, len = Math.sqrt(i); j <= len; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			result.push(i);
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
