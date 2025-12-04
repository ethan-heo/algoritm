/**
 * 백준 1181번 - 단어 정렬
 * https://www.acmicpc.net/problem/1181
 */
function solution(input) {
	let [, ...words] = input
		.trim()
		.split('\n')
		.map((char) => char.trim());

	words = Array.from(new Set(words));

	return words
		.sort((a, b) => {
			if (a.length > b.length) {
				return 1;
			} else if (a.length < b.length) {
				return -1;
			} else {
				for (let i = 0, len = a.length; i < len; i++) {
					const priorityA = a[i].charCodeAt(0);
					const priorityB = b[i].charCodeAt(0);

					if (priorityA > priorityB) {
						return 1;
					} else if (priorityA < priorityB) {
						return -1;
					}
				}
			}
		})
		.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
