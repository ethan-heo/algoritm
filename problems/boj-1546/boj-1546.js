/**
 * 백준 1546번 - 평균
 * https://www.acmicpc.net/problem/1546
 */
function solution(input) {
	const [, numbersStr] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const numbers = numbersStr.split(' ').map(Number);
	const maxNumber = Math.max(...numbers);
	const a = numbers.map((number) => (number / maxNumber) * 100);

	return (
		numbers.map((number) => (number / maxNumber) * 100).reduce((acc, number) => acc + number) /
		numbers.length
	);
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
