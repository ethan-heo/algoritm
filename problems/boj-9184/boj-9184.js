/**
 * 백준 9184번 - 신나는 함수 실행
 * https://www.acmicpc.net/problem/9184
 */
function solution(input) {
	const trimmed = input.trim();

	const problems = trimmed
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number))
		.filter((p) => !(p[0] === -1 && p[1] === -1 && p[2] === -1));

	/**
	  if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) returns: 1
		if a > 20 or b > 20 or c > 20, then w(a, b, c) returns: w(20, 20, 20)
		if a < b and b < c, then w(a, b, c) returns:
				w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
		otherwise it returns:
				w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
	 */

	const memo = Array.from({ length: 21 }, () =>
		Array.from({ length: 21 }, () => new Array(21).fill(-1))
	);

	const w = (a, b, c) => {
		if (a <= 0 || b <= 0 || c <= 0) return 1;
		if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

		if (memo[a][b][c] !== -1) return memo[a][b][c];

		if (a < b && b < c) {
			memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
		} else {
			memo[a][b][c] =
				w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
		}

		return memo[a][b][c];
	};

	const result = [];

	for (const problem of problems) {
		result.push(`w(${problem.join(', ')}) = ${w(...problem)}`);
	}

	return result.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
