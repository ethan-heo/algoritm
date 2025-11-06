/**
 * 백준 2675번 - 문자열 반복
 * https://www.acmicpc.net/problem/2675
 */
function solution(input) {
	const [, ...cases] = input.trim().split('\n');
	const result = [];

	for (let [repeats, str] of cases.map((c) => c.trim().split(' '))) {
		repeats = Number(repeats);

		result.push(
			str
				.split('')
				.map((char) => ''.padStart(repeats, char))
				.join('')
		);
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
