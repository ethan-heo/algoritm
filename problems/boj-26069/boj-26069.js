/**
 * 백준 26069번 - 붙임성 좋은 총총이
 * https://www.acmicpc.net/problem/26069
 *
 * ChongChong 댄서와 만난 모든 사람은 총총 댄스를 추고 있어야 한다. 그러므로 ChongChong과 만난 시점부터 그와 연관된 사람은 모두 총총 댄스를 춰야 함.
 * 총총 댄스를 추고 있는 사람을 기억하고 그와 연관되어 있는 사람일 때 동일하게 춤추고 있도록 만들면 됨.
 * -> Map을 사용해 댄서마다 총총댄스를 추고있는지 여부를 관리하고 이를 이용해 연관된 사람을 찾도록 알고리즘을 구현
 */
function solution(input) {
	const [, ...dancers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' '));

	const chongChongDancing = new Map();

	for (const metDancers of dancers) {
		if (
			metDancers.includes('ChongChong') ||
			metDancers.some((dancer) => chongChongDancing.get(dancer))
		) {
			metDancers.forEach((dancer) => chongChongDancing.set(dancer, true));
		} else {
			metDancers.forEach((dancer) => chongChongDancing.set(dancer, false));
		}
	}

	return Array.from(chongChongDancing.values())
		.reduce((acc, value) => acc + (value ? 1 : 0), 0)
		.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
