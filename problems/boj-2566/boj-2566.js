/**
 * 백준 2566번 - 최댓값
 * https://www.acmicpc.net/problem/2566
 */
function solution(input) {
	const SIZE = 9;
	const arr = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number))
		.flat(1);
	const maxNumber = Math.max(...arr);
	const maxNumberIdx = arr.findIndex((number) => number === maxNumber);

	return `${maxNumber}\n${Math.floor(maxNumberIdx / SIZE) + 1} ${(maxNumberIdx % SIZE) + 1}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
