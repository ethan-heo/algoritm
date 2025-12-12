/**
 * 백준 11478번 - 서로 다른 부분 문자열의 개수
 * https://www.acmicpc.net/problem/11478
 */
function solution(input) {
	const result = new Set();

	for (let i = 0, i_len = input.length; i < i_len; i++) {
		let word = i + 1;
		for (let j = 0, j_len = i_len - i; j < j_len; j++) {
			result.add(input.slice(j, j + word));
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
