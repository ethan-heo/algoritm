/**
 * 백준 15652번 - N과 M (4)
 * https://www.acmicpc.net/problem/15652
 */
function solution(input) {
	const [N, M] = input.split(' ').map(Number);
	const arr = Array.from({ length: M }).fill(0);
	const result = [];

	const dfs = (start, depth) => {
		if (depth === M) {
			result.push([...arr]);
			return;
		}

		for (let i = start; i <= N; i++) {
			arr[depth] = i;
			dfs(i, depth + 1);
		}
	};

	dfs(1, 0);

	return result.map((arr) => arr.join(' ')).join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
