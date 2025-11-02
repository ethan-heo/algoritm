/**
 * 백준 10818번 - 최소, 최대
 * https://www.acmicpc.net/problem/10818
 */
function solution(input) {
	let [, numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	numbers = numbers.split(' ').map(Number);

	return `${Math.min(...numbers)} ${Math.max(...numbers)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
