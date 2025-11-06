/**
 * 백준 5622번 - 다이얼
 * https://www.acmicpc.net/problem/5622
 */
function solution(input) {
	const timers = {
		A: 3,
		B: 3,
		C: 3,
		D: 4,
		E: 4,
		F: 4,
		G: 5,
		H: 5,
		I: 5,
		J: 6,
		K: 6,
		L: 6,
		M: 7,
		N: 7,
		O: 7,
		P: 8,
		Q: 8,
		R: 8,
		S: 8,
		T: 9,
		U: 9,
		V: 9,
		W: 10,
		X: 10,
		Y: 10,
		Z: 10,
	};

	return `${input.split('').reduce((acc, char) => {
		return acc + timers[char];
	}, 0)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
