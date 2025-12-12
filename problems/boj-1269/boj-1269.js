/**
 * 백준 1269번 - 대칭 차집합
 * https://www.acmicpc.net/problem/1269
 */
function solution(input) {
	let [, 집합1, 집합2] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	const 집합 = [...집합1.split(' '), ...집합2.split(' ')];

	const result = new Map();

	for (let i = 0, len = 집합.length; i < len; i++) {
		if (result.has(집합[i])) {
			result.delete(집합[i]);
		} else {
			result.set(집합[i], true);
		}
	}

	return result.size.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
