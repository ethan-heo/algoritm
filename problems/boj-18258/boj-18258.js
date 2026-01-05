/**
 * 백준 18258번 - 큐2
 * https://www.acmicpc.net/problem/18258
 */
function solution(input) {
	const [, ...commands] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' '));

	const createQueue = () => {
		const map = new Map();
		let tail = 0;
		let head = 0;

		return {
			push(value) {
				map.set(tail++, value);
			},
			pop() {
				if (head === tail) return -1;

				const value = map.get(head);

				map.delete(head++);

				return value;
			},
			size() {
				return map.size;
			},
			empty() {
				return this.size() === 0 ? 1 : 0;
			},
			front() {
				if (this.empty()) {
					return -1;
				}

				return map.get(head);
			},
			back() {
				if (this.empty()) {
					return -1;
				}

				return map.get(tail - 1);
			},
		};
	};

	const result = [];
	const queue = createQueue();

	for (const [command, value] of commands) {
		switch (command) {
			case 'push':
				queue.push(value);
				break;
			case 'pop':
				result.push(queue.pop());
				break;
			case 'size':
				result.push(queue.size());
				break;
			case 'empty':
				result.push(queue.empty());
				break;
			case 'front':
				result.push(queue.front());
				break;
			case 'back':
				result.push(queue.back());
				break;
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
