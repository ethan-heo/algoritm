/**
 * 백준 1152번 - 단어의 개수
 * https://www.acmicpc.net/problem/1152
 */
function solution(input) {
	const matches = input.match(/[a-zA-Z]{1,}/g);

	if (!matches) return `0`;

	return `${matches.length}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
