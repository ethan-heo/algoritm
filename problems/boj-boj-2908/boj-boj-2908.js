/**
 * 백준 boj-2908번 - 상수
 * https://www.acmicpc.net/problem/boj-2908
 */
function solution(input) {
	return `${Math.max(...input.split('').reverse().join('').split(' ').map(Number))}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
