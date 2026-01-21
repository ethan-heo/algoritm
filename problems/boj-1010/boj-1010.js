/**
 * 백준 1010번 - 다리 놓기
 * https://www.acmicpc.net/problem/1010
 */

function factorial(N) {
	let result = 1n;

	for (let i = N; i > 0n; i--) {
		result *= i;
	}

	return result;
}

function solution(input) {
	const [, ...cases] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(BigInt));
	const result = [];

	for (const [N, M] of cases) {
		result.push((factorial(M) / (factorial(N) * factorial(M - N))).toString());
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
