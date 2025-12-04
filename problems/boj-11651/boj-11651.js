/**
 * 백준 11650번 - 좌표 정렬하기
 * https://www.acmicpc.net/problem/11650
 */
function solution(input) {
	let [, ...points] = input.trim().split('\n');

	points = points.map((str) => str.trim().split(' ').map(Number));

	return points
		.sort(([x1, y1], [x2, y2]) => {
			if (y1 > y2) {
				return 1;
			} else if (y1 < y2) {
				return -1;
			} else {
				if (x1 > x2) {
					return 1;
				} else if (x1 < x2) {
					return -1;
				} else {
					return 0;
				}
			}
		})
		.map((point) => point.join(' '))
		.join('\n');
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
