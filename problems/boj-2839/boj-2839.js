/**
 * 백준 2839번 - 설탕 배달
 * https://www.acmicpc.net/problem/2839
 */
function solution(input) {
	input = Number(input);
	let result = [];

	for (let i = 0, i_len = Math.ceil(input / 5); i <= i_len; i++) {
		for (let j = 0, j_len = Math.ceil(input / 3); j <= j_len; j++) {
			const totalKg = i * 5 + j * 3;

			if (totalKg === input) {
				result.push(i + j);
			}
		}
	}

	return `${result.length === 0 ? -1 : Math.min(...result)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
