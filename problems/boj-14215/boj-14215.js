/**
 * 백준 14215번 - 세 막대
 * https://www.acmicpc.net/problem/14215
 */
function solution(input) {
	const numbers = input.split(' ').map(Number);
	const max = Math.max(...numbers);
	let total = numbers.reduce((acc, number) => acc + number, 0);

	if (max >= total - max) {
		total = total - (max - (total - max) + 1);
	}

	return `${total}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
