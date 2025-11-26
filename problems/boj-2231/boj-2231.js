/**
 * 백준 2231번 - 분해합
 * https://www.acmicpc.net/problem/2231
 */
function solution(input) {
	input = Number(input);
	let result = 0;

	for (let i = input - input.toString().length * 9; i < input; i++) {
		const 분해합 = i
			.toString()
			.split('')
			.map(Number)
			.reduce((acc, number) => acc + number, i);

		if (분해합 === input) {
			result = i;
			break;
		}
	}

	return `${result}`;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
