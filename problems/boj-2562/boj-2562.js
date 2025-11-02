/**
 * 백준 2562번 - 최댓값
 * https://www.acmicpc.net/problem/2562
 */
function solution(input) {
	const numbers = input.trim().split('\n').map(Number);
	const maxNumber = Math.max(...numbers);

	return `${maxNumber}\n${numbers.findIndex((number) => number === maxNumber) + 1}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
