/**
 * 백준 24265번 - 알고리즘 수업 - 알고리즘의 수행 시간 4
 * https://www.acmicpc.net/problem/24265
 */
function solution(input) {
	input = Number(input);

	return `${((input - 1) * input) / 2}\n2`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
