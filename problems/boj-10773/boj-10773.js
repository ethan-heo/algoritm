/**
 * 백준 10773번 - 제로
 * https://www.acmicpc.net/problem/10773
 */
function solution(input) {
	const [, ...numbers] = input
		.trim()
		.split('\n')
		.map((str) => BigInt(str.trim()));
	const stack = [];

	for (const number of numbers) {
		if (number === 0n) {
			stack.pop();
		} else {
			stack.push(number);
		}
	}

	return stack.reduce((acc, item) => acc + item, 0n).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
