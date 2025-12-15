/**
 * 백준 13241번 - 최소공배수
 * https://www.acmicpc.net/problem/13241
 */
function solution(input) {
	const [num1, num2] = input.trim().split(' ').map(BigInt);
	let gcd;

	for (let i = num1 < num2 ? num1 : num2; i > 0n; i--) {
		if (num1 % i === 0n && num2 % i === 0n) {
			gcd = i;
			break;
		}
	}

	if (gcd) {
		return `${(num1 / gcd) * (num2 / gcd) * gcd}`;
	} else {
		return `${num1 * num2}`;
	}
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
