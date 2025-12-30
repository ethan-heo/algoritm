/**
 * 백준 4949번 - 균형잡힌 세상
 * https://www.acmicpc.net/problem/4949
 */
function solution(input) {
	const ps = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const result = [];
	const P = ['(', '[', ')', ']'];

	ps.pop();

	for (const p of ps) {
		const stack = [];

		if (p.at(-1) !== '.') {
			result.push('no');
			continue;
		}

		for (let i = 0, len = p.length; i < len; i++) {
			const char = p.at(i);

			if (!P.includes(char)) {
				continue;
			}

			if (char === '(' || char === '[') {
				stack.push(char);
			} else {
				const item = stack.at(-1);
				if (
					stack.length === 0 ||
					(char === ')' && item !== '(') ||
					(char === ']' && item !== '[')
				) {
					stack.push(-1);
					break;
				}

				stack.pop();
			}
		}

		if (stack.length === 0) {
			result.push('yes');
		} else {
			result.push('no');
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
