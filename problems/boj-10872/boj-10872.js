/**
 * 백준 10872번 - 팩토리얼
 * https://www.acmicpc.net/problem/10872
 */
function solution(input) {
	input = Number(input);

	let result = 1;

	for (let i = input; i > 0; i--) {
		result *= i;
	}

	return result.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
