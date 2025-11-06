/**
 * 백준 11720번 - 숫자의 합
 * https://www.acmicpc.net/problem/11720
 */
function solution(input) {
	const [, str] = input.trim().split('\n');

	return `${str
		.trim()
		.split('')
		.map(Number)
		.reduce((acc, number) => acc + number)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
