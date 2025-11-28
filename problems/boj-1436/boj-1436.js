/**
 * 백준 1436번 - 영화감독 숌
 * https://www.acmicpc.net/problem/1436
 */
function solution(input) {
	input = Number(input);

	let count = 0;
	let number = 1;

	while (count !== input) {
		number++;

		if (number.toString().includes('666')) {
			count++;
		}
	}

	return `${number}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
