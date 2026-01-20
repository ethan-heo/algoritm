/**
 * 백준 11050번 - 이항 계수1
 * https://www.acmicpc.net/problem/11050
 */

function factorial(N) {
	let result = 1;

	for (let i = N; i > 0; i--) {
		result *= i;
	}

	return result;
}

function solution(input) {
	const [n, k] = input.split(' ').map(Number);

	return (factorial(n) / (factorial(k) * factorial(n - k))).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
