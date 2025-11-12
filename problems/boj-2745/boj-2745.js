/**
 * 백준 2745번 - 진법 변환
 * https://www.acmicpc.net/problem/2745
 */
function solution(input) {
	let [B, N] = input.trim().split(' ');
	const parseBase = (char) => {
		return char.charCodeAt(0) - 65 + 10;
	};
	const isNumber = (char) => {
		const result = Number(char);

		return !!result ? true : result === 0 ? true : false;
	};

	N = Number(N);

	let result = 0;

	for (let i = 0, len = B.length; i < len; i++) {
		const char = B[i];

		if (isNumber(char)) {
			result += Number(char) * N ** (len - 1 - i);
		} else {
			result += parseBase(char) * N ** (len - 1 - i);
		}
	}

	return `${result}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
