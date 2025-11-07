/**
 * 백준 25206번 - 너의 평점은
 * https://www.acmicpc.net/problem/25206
 */
function solution(input) {
	const reportCards = input
		.trim()
		.split('\n')
		.map((reportCard) => {
			const [lecture, point, grade] = reportCard.trim().split(' ');

			return [lecture, parseFloat(point), grade];
		});
	const pointFromGrade = {
		'A+': 4.5,
		A0: 4.0,
		'B+': 3.5,
		B0: 3.0,
		'C+': 2.5,
		C0: 2.0,
		'D+': 1.5,
		D0: 1.0,
		F: 0.0,
	};
	let totalPoint = 0;
	let total = 0;

	for (const [, point, grade] of reportCards) {
		if (grade === 'P') continue;

		total += pointFromGrade[grade] * point;
		totalPoint += point;
	}

	return total / totalPoint; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
