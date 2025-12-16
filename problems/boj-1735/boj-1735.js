/**
 * 백준 1735번 - 분수 합
 * https://www.acmicpc.net/problem/1735
 */
function solution(input) {
	const fractions = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	const getGCD = (num1, num2) => {
		let gcd;

		for (let i = num1 < num2 ? num1 : num2; i > 0; i--) {
			if (num1 % i === 0 && num2 % i === 0) {
				gcd = i;
				break;
			}
		}

		return gcd;
	};

	const fraction = [
		fractions[0][0] * fractions[1][1] + fractions[1][0] * fractions[0][1],
		fractions[0][1] * fractions[1][1],
	];

	const gcd = getGCD(...fraction);

	return fraction.map((num) => num / (gcd ?? 1)).join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
