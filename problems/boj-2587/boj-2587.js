/**
 * 백준 2587번 - 대푯값2
 * https://www.acmicpc.net/problem/2587
 */
function solution(input) {
	let numbers = input
		.trim()
		.split('\n')
		.map((char) => Number(char.trim()));
	const len = numbers.length;

	numbers = numbers.sort((a, b) => a - b);

	return `${numbers.reduce((acc, number) => acc + number, 0) / len}\n${numbers[2]}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
