/**
 * 백준 1934번 - 최소공배수
 * https://www.acmicpc.net/problem/1934
 */
function solution(input) {
	let [, ...numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const result = [];
	numbers = numbers.map((str) => str.split(' ').map(Number));

	for (const [num1, num2] of numbers) {
		let gcd;

		for (let i = Math.min(num1, num2); i > 0; i--) {
			if (num1 % i === 0 && num2 % i === 0) {
				gcd = i;
				break;
			}
		}

		if (gcd) {
			result.push((num1 / gcd) * (num2 / gcd) * gcd);
		} else {
			result.push(num1 * num2);
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
