/**
 * 백준 1427번 - 소트인사이드
 * https://www.acmicpc.net/problem/1427
 */
function solution(input) {
	return input
		.split('')
		.map(Number)
		.sort((a, b) => b - a)
		.join(''); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
