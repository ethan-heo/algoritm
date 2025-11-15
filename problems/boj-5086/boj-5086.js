/**
 * 백준 5086번 - 배수와 약수
 * https://www.acmicpc.net/problem/5086
 */
function solution(input) {
	const numberList = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	const result = [];

	for (const [num1, num2] of numberList) {
		if (num1 === num2) continue;

		if (num1 > num2 && num1 % num2 === 0) {
			result.push('multiple');
		} else if (num1 < num2 && num2 % num1 === 0) {
			result.push('factor');
		} else {
			result.push('neither');
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
