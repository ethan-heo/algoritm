/**
 * 백준 1904번 - 01타일
 * https://www.acmicpc.net/problem/1904
 */
function solution(input) {
	const N = parseInt(input.trim());
	const MOD = 15746;

	if (N === 1) return '1';
	if (N === 2) return '2';

	let prev2 = 1; // f(1)
	let prev1 = 2; // f(2)

	for (let i = 3; i <= N; i++) {
		const cur = (prev1 + prev2) % MOD;
		prev2 = prev1;
		prev1 = cur;
	}

	return String(prev1);
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
