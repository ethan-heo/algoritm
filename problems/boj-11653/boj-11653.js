/**
 * 백준 11653번 - 소인수분해
 * https://www.acmicpc.net/problem/11653
 */
function solution(input) {
	input = Number(input);

	if (input === 1) return;

	const result = [];

	for (let i = 2; i <= input; i++) {
		while (input % i === 0) {
			result.push(i);
			input /= i;
		}
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
