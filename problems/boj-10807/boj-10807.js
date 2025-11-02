/**
 * 백준 10807번 - 개수_세기
 * https://www.acmicpc.net/problem/10807
 */
function solution(input) {
	let [_, numbers, comparingNumber] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	let result = 0;

	for (const number of numbers.split(' ')) {
		if (comparingNumber === number) {
			result++;
		}
	}

	return '' + result;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
