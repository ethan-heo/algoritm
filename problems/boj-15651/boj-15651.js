/**
 * 백준 15651번 - N과 M (3)
 * https://www.acmicpc.net/problem/15651
 */
function solution(input) {
	const [N, M] = input.split(' ').map(Number);
	const visit = Array.from({ length: N }).fill(false);
	const arr = Array.from({ length: M }).fill(0);
	const result = [];

	const dfs = (N, M, depth) => {
		if (depth === M) {
			result.push([...arr]);
			return;
		}

		for (let i = 0; i < N; i++) {
			visit[i] = true;
			arr[depth] = i + 1;
			dfs(N, M, depth + 1);
			visit[i] = false;
		}
	};

	dfs(N, M, 0);

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
