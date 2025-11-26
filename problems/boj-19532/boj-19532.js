/**
 * 백준 19532번 - 수학은 비대면강의입니다
 * https://www.acmicpc.net/problem/19532
 */
function solution(input) {
	const [a, b, c, d, e, f] = input.split(' ').map(Number);
	let result = [];

	for (let x = -999; x <= 999; x++) {
		for (let y = -999; y <= 999; y++) {
			if (a * x + b * y === c && d * x + e * y === f) {
				result = [x, y];
				break;
			}
		}

		if (result.length > 0) {
			break;
		}
	}

	return result.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
