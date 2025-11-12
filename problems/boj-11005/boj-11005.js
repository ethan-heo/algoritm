/**
 * 백준 11005번 - 진법 변환 2
 * https://www.acmicpc.net/problem/11005
 */
function solution(input) {
	let [N, B] = input.trim().split(' ').map(Number);
	const parseBase = (number) => {
		return String.fromCharCode(number + 65);
	};
	const calcBase = (remaining) => {
		return remaining >= 10 ? parseBase(remaining - 10) : `${remaining}`;
	};

	let result = '';

	while (N >= B) {
		result += calcBase(N % B);

		N = Math.floor(N / B);
	}

	result += calcBase(N % B);

	return result.split('').reverse().join(''); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
