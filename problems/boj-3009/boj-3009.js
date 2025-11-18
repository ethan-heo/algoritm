/**
 * 백준 3009번 - 네번째 점
 * https://www.acmicpc.net/problem/3009
 */
function solution(input) {
	const points = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	const xPoint = [Number.MAX_VALUE, Number.MIN_VALUE];
	const yPoint = [Number.MAX_VALUE, Number.MIN_VALUE];

	for (const [x, y] of points) {
		xPoint[0] = Math.min(xPoint[0], x);
		xPoint[1] = Math.max(xPoint[1], x);
		yPoint[0] = Math.min(yPoint[0], y);
		yPoint[1] = Math.max(yPoint[1], y);
	}

	const cases = [
		[xPoint[0], yPoint[0]],
		[xPoint[0], yPoint[1]],
		[xPoint[1], yPoint[0]],
		[xPoint[1], yPoint[1]],
	];
	const result = [0, 0];

	for (const [x, y] of cases) {
		let isMatched = false;

		for (const [_x, _y] of points) {
			if (x === _x && y === _y) {
				isMatched = true;
				break;
			}
		}

		if (!isMatched) {
			result[0] = x;
			result[1] = y;
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
