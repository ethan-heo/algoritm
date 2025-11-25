/**
 * 백준 24313번 - 알고리즘 수업 - 점근적 표기 1
 * https://www.acmicpc.net/problem/24313
 */
function solution(input) {
	let [a, c, n0] = input.trim().split('\n');
	const [a1, a0] = a.trim().split(' ').map(Number);
	c = Number(c.trim());
	n0 = Number(n0.trim());

	return `${a1 * n0 + a0 <= c * n0 && a1 <= c ? 1 : 0}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
