/**
 * 백준 7785번 - 회사에 있는 사람
 * https://www.acmicpc.net/problem/7785
 */
function solution(input) {
	let [, ...출퇴근기록] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	출퇴근기록 = 출퇴근기록.map((str) => str.split(' '));
	let 명부 = new Set();

	for (const [이름, 기록] of 출퇴근기록) {
		if (기록 === 'enter') {
			명부.add(이름);
		} else {
			명부.delete(이름);
		}
	}

	const 결과 = Array.from(명부).sort((a, b) => {
		const 길이가_작은_이름 = a.length > b.length ? b : a;

		for (let i = 0, len = 길이가_작은_이름.length; i < len; i++) {
			const codeA = a.charCodeAt(i);
			const codeB = b.charCodeAt(i);

			if (codeA === codeB) continue;

			if (codeA > codeB) {
				return -1;
			} else {
				return 1;
			}
		}

		if (a.length > b.length) {
			return -1;
		} else {
			return 1;
		}
	});

	return 결과.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
