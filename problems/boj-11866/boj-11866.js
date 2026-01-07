/**
 * 백준 11866번 - 요세푸스 문제 0
 * https://www.acmicpc.net/problem/11866
 */
function solution(input) {
	const [N, K] = input.split(' ').map(Number);
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

	const queue = createQueue();

	for (let i = 0; i < N; i++) {
		queue.push(i + 1);
	}

	let result = [];

	while (!queue.empty()) {
		for (let i = 1; i < K; i++) {
			queue.push(queue.pop());
		}

		result.push(queue.pop());
	}

	return `<${result.join(', ')}>`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
