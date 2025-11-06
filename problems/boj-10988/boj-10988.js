/**
 * 백준 10988번 - 팰린드롬인지 확인하기
 * https://www.acmicpc.net/problem/10988
 */
function solution(input) {
	for (let i = 0, len = Math.floor(input.length / 2); i < len; i++) {
		if (input.at(i) === input.at(-i - 1)) continue;

		return `0`;
	}

	return `1`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
