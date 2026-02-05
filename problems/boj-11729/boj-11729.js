/**
 * 백준 11729번 - 하노이 탑 이동 순서
 * https://www.acmicpc.net/problem/11729
 */
function solution(input) {
	const result = [];

	const hanoi = (n, s, v, t) => {
		if (n === 1) {
			result.push(`${s} ${t}`);
		} else {
			hanoi(n - 1, s, t, v);
			result.push(`${s} ${t}`);
			hanoi(n - 1, v, s, t);
		}
	};

	hanoi(Number(input), 1, 2, 3);

	return [result.length, ...result].join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
