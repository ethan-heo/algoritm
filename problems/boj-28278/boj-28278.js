/**
 * 백준 28278번 - 스택2
 * https://www.acmicpc.net/problem/28278
 */
function solution(input) {
	const [, ...commands] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' '));
	const stack = {
		arr: [],
		push(value) {
			this.arr.push(value);
		},
		pop() {
			return this.arr.pop() ?? -1;
		},
		length() {
			return this.arr.length;
		},
		isEmpty() {
			return this.length() ? 0 : 1;
		},
		show() {
			return this.arr[this.length() - 1] ?? -1;
		},
	};
	const result = [];

	for (const [command, value] of commands) {
		switch (command) {
			case '1':
				stack.push(value);
				break;
			case '2':
				result.push(stack.pop());
				break;
			case '3':
				result.push(stack.length());
				break;
			case '4':
				result.push(stack.isEmpty());
				break;
			case '5':
				result.push(stack.show());
				break;
		}
	}

	return result.join('\n');
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
