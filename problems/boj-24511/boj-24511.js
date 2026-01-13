/**
 * 백준 24511번 - queuestack
 * https://www.acmicpc.net/problem/24511
 */

function solution(input) {
	let [, dataStructures, items, , newItems] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	// 큐인 것들의 초기값만 역순으로 저장
	const queue = [];
	for (let i = items.length - 1; i >= 0; i--) {
		if (dataStructures[i] === 0) {
			queue.push(items[i]);
		}
	}

	// shift() 대신 front 인덱스 사용 (O(1))
	let front = 0;
	const result = [];

	for (const newItem of newItems) {
		queue.push(newItem);
		result.push(queue[front++]);
	}

	return result.join(' ');
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync('/dev/stdin').toString().trim();
	const result = solution(input);
	console.log(result);
}
