/**
 * 백준 2501번 - 약수 구하기
 * https://www.acmicpc.net/problem/2501
 */
function solution(input) {
	const [N, K] = input.split(' ').map(Number);
	let store = new Set();

	for (let i = 1; i <= N; i++) {
		if (N % i === 0) {
			store.add(i);
		}
	}

	return `${
		Array.from(store.values())
			.sort((a, b) => a - b)
			.at(K - 1) ?? 0
	}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
