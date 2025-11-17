/**
 * 백준 1085번 - 직사각형에서 탈출
 * https://www.acmicpc.net/problem/1085
 */
function solution(input) {
	const [x, y, w, h] = input.split(' ').map(Number);

	return `${Math.min(...[x, y, w - x, h - y])}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
