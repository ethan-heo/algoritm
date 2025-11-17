/**
 * 백준 27323번 - 직사각형
 * https://www.acmicpc.net/problem/27323
 */
function solution(input) {
	return input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()))
		.reduce((acc, number) => acc * number, 1)
		.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
