/**
 * 백준 2751번 - 수 정렬하기 2
 * https://www.acmicpc.net/problem/2751
 */
function solution(input) {
	let [, ...numbers] = input.trim().split('\n');
	numbers = numbers.map((char) => Number(char.trim()));

	return numbers.sort((a, b) => a - b).join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
