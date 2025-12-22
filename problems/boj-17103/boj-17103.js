/**
 * 백준 17103번 - 골드바흐 파티션
 * https://www.acmicpc.net/problem/17103
 *
 * AI 사용
 * - 에라토스테네스의 체 원리 이해
 * - 숫자를 만들 수 있는 소수의 합을 배열의 인덱스를 활용해 소수 구분을 판별 할 수 있는 방법에 대한 이해
 */
function solution(input) {
	const [, ...numbers] = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));

	// 에라토스테네스의 체로 소수 구하기 (최대 1,000,000까지)
	const MAX = 1000000;
	const isPrime = new Array(MAX + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= MAX; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= MAX; j += i) {
				isPrime[j] = false;
			}
		}
	}

	// 각 숫자에 대해 골드바흐 파티션 개수 구하기
	const result = [];

	for (const number of numbers) {
		let count = 0;

		// p1 <= p2 조건으로 중복 방지 (p1 + p2 = number)
		for (let p1 = 2; p1 <= number / 2; p1++) {
			const p2 = number - p1;

			// p1과 p2가 모두 소수이면 유효한 파티션
			if (isPrime[p1] && isPrime[p2]) {
				count++;
			}
		}

		result.push(count);
	}

	return result.join('\n');
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
