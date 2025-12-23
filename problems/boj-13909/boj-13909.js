/**
 * 백준 13909번 - 창문 닫기
 * https://www.acmicpc.net/problem/13909
 */
function solution(input) {
	let result = 0;

	for (let i = 1, len = Number(input); i * i <= len; i++) {
		result++;
	}

	return result.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
