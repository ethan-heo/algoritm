/**
 * 백준 10810번 - 공 넣기
 * https://www.acmicpc.net/problem/10810
 */
function solution(input) {
	const [ranges, ...baskets] = input.trim().split('\n');
	const [length] = ranges.split(' ').map(Number);
	const result = Array.from({ length }).fill(0);

	for (const [min, max, basketNumber] of baskets.map((basket) =>
		basket.trim().split(' ').map(Number)
	)) {
		for (let i = min; i <= max; i++) {
			result[i - 1] = basketNumber;
		}
	}

	return result.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
