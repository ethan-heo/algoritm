/**
 * 백준 25305번 - 커트라인
 * https://www.acmicpc.net/problem/25305
 */
function solution(input) {
	let [info, scores] = input.trim().split('\n');
	const [, cutLine] = info
		.trim()
		.split(' ')
		.map((char) => Number(char.trim()));
	scores = scores
		.trim()
		.split(' ')
		.map((char) => Number(char.trim()));
	scores = scores.sort((a, b) => b - a);

	return scores.at(cutLine - 1).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
