/**
 * 백준 10101번 - 삼각형 외우기
 * https://www.acmicpc.net/problem/10101
 */
function solution(input) {
	const numbers = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const totalNumber = numbers.reduce((acc, number) => acc + number, 0);

	if (totalNumber !== 180) {
		return 'Error';
	}

	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	if (min === 60) {
		return 'Equilateral';
	}

	if (
		numbers.filter((number) => number === min).length > 1 ||
		numbers.filter((number) => number === max).length > 1
	) {
		return 'Isosceles';
	}

	return 'Scalene'; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
