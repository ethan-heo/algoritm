/**
 * 백준 4779번 - 칸토어 집합
 * https://www.acmicpc.net/problem/4779
 */
function solution(input) {
	const lines = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));

	const recur = (n) => {
		if (n === 1) return '-';

		const unit = recur(n / 3);
		const result = unit + ' '.repeat(n / 3) + unit;

		return result;
	};

	const result = [];

	for (const line of lines) {
		result.push(recur(3 ** line));
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
