/**
 * 백준 2903번 - 중앙 이동 알고리즘
 * https://www.acmicpc.net/problem/2903
 */
function solution(input) {
	return `${(2 ** Number(input) + 1) ** 2}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
