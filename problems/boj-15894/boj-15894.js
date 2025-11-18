/**
 * 백준 15894번 - 수학은 체육과목 입니다
 * https://www.acmicpc.net/problem/15894
 */
function solution(input) {
	return `${Number(input) * 4}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
