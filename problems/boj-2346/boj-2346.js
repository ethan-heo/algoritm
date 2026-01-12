/**
 * 백준 2346번 - 풍선 터트리기
 * https://www.acmicpc.net/problem/2346
 */
const createDequeue = () => {
	// 배열 기반 deque (메모리 효율적)
	const arr = [];

	const size = () => {
		return arr.length;
	};

	const addFirst = (value) => {
		arr.unshift(value);
	};

	const addLast = (value) => {
		arr.push(value);
	};

	const removeFirst = () => {
		if (size() === 0) return -1;
		return arr.shift();
	};

	const removeLast = () => {
		if (size() === 0) return -1;
		return arr.pop();
	};

	const empty = () => {
		return size() === 0 ? 1 : 0;
	};

	const showFirst = () => {
		return size() > 0 ? arr[0] : -1;
	};

	const showLast = () => {
		return size() > 0 ? arr[arr.length - 1] : -1;
	};

	const rotate = (count) => {
		if (size() === 0 || count === 0) return;

		const len = size();

		// 회전 방향에 따라 처리
		if (count > 0) {
			// 양수: 오른쪽으로 회전 (뒤에서 빼서 앞에 추가)
			const normalizedCount = count % len;
			for (let i = 0; i < normalizedCount; i++) {
				addFirst(removeLast());
			}
		} else {
			// 음수: 왼쪽으로 회전 (앞에서 빼서 뒤에 추가)
			const normalizedCount = (-count) % len;
			for (let i = 0; i < normalizedCount; i++) {
				addLast(removeFirst());
			}
		}
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
		rotate,
	};
};
function solution(input) {
	const [n, numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	// deque 생성 및 초기화: [풍선 번호, 이동할 칸 수]
	const dq = createDequeue();
	for (let i = 0; i < n; i++) {
		dq.addLast([i + 1, numbers[i]]);
	}

	const result = [];

	// 풍선이 모두 터질 때까지 반복
	while (dq.size() > 0) {
		// 현재 풍선을 터트림
		const [balloonNum, move] = dq.removeFirst();
		result.push(balloonNum);

		// 마지막 풍선이면 종료
		if (dq.size() === 0) break;

		// rotate 메서드를 사용하여 회전 (메모리 효율적으로 개선됨)
		// 양수: 오른쪽으로 이동 -> 왼쪽으로 회전 (move-1)
		// 음수: 왼쪽으로 이동 -> 오른쪽으로 회전 (move)
		if (move > 0) {
			dq.rotate(-(move - 1));
		} else {
			dq.rotate(-move);
		}
	}

	return result.join(' ');
}

module.exports = { solution, createDequeue };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
