/**
 * 백준 1157번 - 단어 공부
 * https://www.acmicpc.net/problem/1157
 */
function solution(input) {
	const map = new Map();

	for (const char of input.split('')) {
		const count = map.get(char.toUpperCase()) ?? 0;

		map.set(char.toUpperCase(), count + 1);
	}

	const maxCount = Math.max(...map.values());

	const a = map.entries();

	if (Array.from(map.values()).filter((count) => count === maxCount).length > 1) {
		return '?';
	}

	return Array.from(map.entries()).reduce((acc, [key, value]) => {
		if (maxCount === value) {
			return key;
		}

		return acc;
	}, ''); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
