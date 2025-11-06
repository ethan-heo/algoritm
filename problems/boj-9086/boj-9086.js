/**
 * 백준 9086번 - 문자열
 * https://www.acmicpc.net/problem/9086
 */
function solution(input) {
	const [, ...strList] = input.trim().split('\n');
	let result = [];

	for (const str of strList.map((str) => str.trim())) {
		result.push(`${str.at(0)}${str.at(-1)}`);
	}

	return result.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
