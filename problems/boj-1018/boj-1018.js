/**
 * 백준 1018번 - 체스판 다시 칠하기
 * https://www.acmicpc.net/problem/1018
 */
function solution(input) {
	let [lineInfo, ...tiles] = input.trim().split('\n');
	tiles = tiles.map((tile) => tile.trim());
	const [rows, cols] = lineInfo.trim().split(' ').map(Number);
	const chessTile = 8;
	const positions = [];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			positions.push([i, i + chessTile, j, j + chessTile]);

			if (j + chessTile >= cols) {
				break;
			}
		}

		if (i + chessTile >= rows) {
			break;
		}
	}

	const result = [];

	for (let i = 0, len = positions.length; i < len; i++) {
		const [yMin, yMax, xMin, xMax] = positions[i];
		let patternA = 0; // B로 시작하는 패턴
		let patternB = 0; // W로 시작하는 패턴

		for (let j = yMin; j < yMax; j++) {
			for (let k = xMin; k < xMax; k++) {
				const tile = tiles[j][k];

				// 패턴 A: (행+열)이 짝수면 B, 홀수면 W
				if ((j + k) % 2 === 0) {
					if (tile !== 'B') patternA++;
				} else {
					if (tile !== 'W') patternA++;
				}

				// 패턴 B: (행+열)이 짝수면 W, 홀수면 B
				if ((j + k) % 2 === 0) {
					if (tile !== 'W') patternB++;
				} else {
					if (tile !== 'B') patternB++;
				}
			}
		}

		result.push(Math.min(patternA, patternB));
	}

	return `${Math.min(...result)}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
