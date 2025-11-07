/**
 * 백준 1316번 - 그룹 단어 체커
 * https://www.acmicpc.net/problem/1316
 */
function solution(input) {
	const [, ...strList] = input.trim().split('\n');
	let result = 0;

	for (const str of strList.map((str) => str.trim())) {
		const checker = new Set();
		let isNotGroup = false;

		for (let i = 0; i < str.length; i++) {
			const char = str.at(i);
			const nextChar = str.at(i + 1);

			if (char !== nextChar) {
				if (checker.has(char)) {
					isNotGroup = true;
					break;
				}
				checker.add(char);
			}
		}

		if (!isNotGroup) {
			result++;
		}
	}

	return `${result}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
