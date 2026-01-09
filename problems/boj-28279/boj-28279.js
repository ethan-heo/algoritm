/**
 * 백준 28279번 - 덱 2
 * https://www.acmicpc.net/problem/28279
 */
function solution(input) {
	const [, ...commands] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	const createDequeue = () => {
		const map = new Map();
		let front = 0;
		let rare = 0;

		const size = () => {
			return map.size;
		};

		const addFirst = (value) => {
			if (size() === 0) {
				map.set((front = rare = 0), value);
			} else {
				map.set(--front, value);
			}
		};

		const addLast = (value) => {
			if (size() === 0) {
				map.set((front = rare = 0), value);
			} else {
				map.set(++rare, value);
			}
		};

		const removeFirst = () => {
			if (size() === 0) return -1;

			const result = map.get(front);

			map.delete(front++);

			return result;
		};

		const removeLast = () => {
			if (size() === 0) return -1;

			const result = map.get(rare);

			map.delete(rare--);

			return result;
		};

		const empty = () => {
			return size() === 0 ? 1 : 0;
		};

		const showFirst = () => {
			return map.get(front) ?? -1;
		};

		const showLast = () => {
			return map.get(rare) ?? -1;
		};

		return {
			addFirst,
			addLast,
			removeFirst,
			removeLast,
			size,
			empty,
			showFirst,
			showLast,
		};
	};

	const dequeue = createDequeue();
	const result = [];

	for (const [command, value] of commands) {
		switch (command) {
			case 1:
				dequeue.addFirst(value);
				break;
			case 2:
				dequeue.addLast(value);
				break;
			case 3:
				result.push(dequeue.removeFirst());
				break;
			case 4:
				result.push(dequeue.removeLast());
				break;
			case 5:
				result.push(dequeue.size());
				break;
			case 6:
				result.push(dequeue.empty());
				break;
			case 7:
				result.push(dequeue.showFirst());
				break;
			case 8:
				result.push(dequeue.showLast());
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
