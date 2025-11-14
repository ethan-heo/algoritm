/**
 * 백준 1193번 - 분수찾기
 * https://www.acmicpc.net/problem/1193
 */
function solution(input) {
	input = Number(input);

	let count = 1;
	let idx = 1;

	while (idx + count <= input) {
		idx += count++;
	}

	let result = [1, count];

	for (let i = 0, len = input - idx; i < len; i++) {
		result[0] += 1;
		result[1] -= 1;
	}

	return count % 2 === 0 ? result.join('/') : result.reverse().join('/'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
