/**
 * 백준 9063번 - 대지
 * https://www.acmicpc.net/problem/9063
 */
function solution(input) {
	let [, ...points] = input.trim().split('\n');

	points = points.map((str) => str.trim().split(' ').map(Number));

	const pointX = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
	const pointY = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

	for (const [x, y] of points) {
		pointX[0] = Math.min(pointX[0], x);
		pointX[1] = Math.max(pointX[1], x);
		pointY[0] = Math.min(pointY[0], y);
		pointY[1] = Math.max(pointY[1], y);
	}

	return `${(pointX[1] - pointX[0]) * (pointY[1] - pointY[0])}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
