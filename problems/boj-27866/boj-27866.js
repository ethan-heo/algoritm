/**
 * 백준 27866번 - 문자와 문자열
 * https://www.acmicpc.net/problem/27866
 */
function solution(input) {
	const [str, idx] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	return str.at(Number(idx) - 1); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
