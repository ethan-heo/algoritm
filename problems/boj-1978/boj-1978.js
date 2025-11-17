/**
 * 백준 1978번 - 소수 찾기
 * https://www.acmicpc.net/problem/1978
 */
function solution(input) {
	let [, numbers] = input.trim().split('\n');
	let result = 0;

	numbers = numbers.trim().split(' ').map(Number);

	for (const number of numbers) {
		if (number === 1) continue;

		let isPrime = true;

		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			result++;
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
