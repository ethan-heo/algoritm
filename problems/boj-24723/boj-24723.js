/**
 * 백준 24723번 - 녹색 거탑
 * https://www.acmicpc.net/problem/24723
 */
function solution(input) {
	return Math.pow(2, Number(input)).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
