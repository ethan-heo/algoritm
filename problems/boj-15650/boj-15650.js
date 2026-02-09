/**
 * 백준 15650번 - N과 M(2)
 * https://www.acmicpc.net/problem/15650
 */
function solution(input) {
	const [N, M] = input.split(' ').map(Number);
	const visit = Array.from({ length: N }).fill(false);
	const arr = Array.from({ length: M }).fill(0);
	let result = [];

	const dfs = (N, M, depth) => {
		if (depth === M) {
			const newArr = arr.slice().sort((a, b) => a - b);

			let isInclude = false;

			for (const item of result) {
				if (item.join('') === newArr.join('')) {
					isInclude = true;
					break;
				}
			}

			if (isInclude) return;

			result.push([...arr]);
			return;
		}

		for (let i = 0; i < N; i++) {
			if (visit[i] === false) {
				visit[i] = true;
				arr[depth] = i + 1;
				dfs(N, M, depth + 1);
				visit[i] = false;
			}
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
