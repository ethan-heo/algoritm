/**
 * 백준 2292번 - 벌집
 * https://www.acmicpc.net/problem/2292
 */
function solution(input) {
	input = Number(input) - 1;
	let result = 1;

	if (input === 0) return `${result}`;

	let idx = 1;

	while (input > 0) {
		input -= 6 * idx++;

		result++;
	}

	return `${result}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
