/**
 * 백준 9012번 - 괄호
 * https://www.acmicpc.net/problem/9012
 */
function solution(input) {
	const [, ...ps] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const result = [];

	for (const p of ps) {
		const stack = [];

		for (let i = 0, len = p.length; i < len; i++) {
			const char = p.at(i);

			if (char === '(') {
				stack.push(char);
			} else {
				if (stack.length === 0) {
					stack.push(-1);
					break;
				}
				stack.pop();
			}
		}

		if (stack.length === 0) {
			result.push('YES');
		} else {
			result.push('NO');
		}
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
