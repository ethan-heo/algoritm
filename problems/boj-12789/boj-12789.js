/**
 * 백준 12789번 - 도키도키 간식드리미
 * https://www.acmicpc.net/problem/12789
 */
function solution(input) {
	const [, numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	const stack = [];
	let entryNumber = 1;

	// 번호표 순서대로 입장할 수 있도록 구현
	for (const number of numbers) {
		stack.push(number);

		while (stack.length) {
			const item = stack.at(-1);

			if (item === entryNumber) {
				entryNumber++;
				stack.pop();
			} else {
				break;
			}
		}
	}

	return stack.length === 0 ? 'Nice' : 'Sad'; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
