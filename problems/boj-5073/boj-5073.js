/**
 * 백준 5073번 - 삼각형과 세 변
 * https://www.acmicpc.net/problem/5073
 */
function solution(input) {
	const numberList = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	numberList.pop();

	const result = [];

	for (const numbers of numberList) {
		const max = Math.max(...numbers);
		const min = Math.min(...numbers);
		const remain = numbers.reduce((acc, number) => acc + number, 0) - max - min;

		if (max >= min + remain) {
			result.push('Invalid');
		} else if (numbers.every((number) => number === max)) {
			result.push('Equilateral');
		} else if (max === min || max === remain || min === remain) {
			result.push('Isosceles');
		} else {
			result.push('Scalene');
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
