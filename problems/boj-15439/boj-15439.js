/**
 * 백준 15439번 - 베라의 패션
 * https://www.acmicpc.net/problem/15439
 */
function solution(input) {
	input = Number(input);

	return (input * (input - 1)).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
