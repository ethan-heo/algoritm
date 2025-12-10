/**
 * 백준 1620번 - 나는야 포켓못 마스터 이다솜
 * https://www.acmicpc.net/problem/1620
 */
function solution(input) {
	const [info, ...words] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const [poketmonCount] = info.split(' ').map(Number);
	const poketmons = words.slice(0, poketmonCount);
	const problems = words.slice(poketmonCount);
	const poketmonMap = poketmons.reduce(
		(acc, poketmon, idx) => (acc.set(poketmon, idx + 1), acc),
		new Map()
	);
	const result = [];

	for (const problem of problems) {
		poketmonMap.has(problem) && result.push(poketmonMap.get(problem));
		poketmons[Number(problem) - 1] && result.push(poketmons[Number(problem) - 1]);
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
