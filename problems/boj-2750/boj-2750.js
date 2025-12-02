/**
 * 백준 2750번 - 수 정렬하기
 * https://www.acmicpc.net/problem/2750
 */
function solution(input) {
	let [, ...numbers] = input.trim().split('\n');

	return numbers
		.map((str) => Number(str.trim()))
		.sort((a, b) => a - b)
		.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
