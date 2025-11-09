/**
 * 백준 2738번 - 행렬 덧셈
 * https://www.acmicpc.net/problem/2738
 */
function solution(input) {
	const [sizes, ...values] = input.trim().split('\n');
	const [row, col] = sizes.trim().split(' ').map(Number);
	const flatValues = values.map((value) => value.trim().split(' ').map(Number)).flat(1);
	const size = col * row;
	const arr = Array.from({ length: size }).fill(0);

	for (let i = 0; i < size; i++) {
		arr[i % size] = flatValues[i] + flatValues[i + size];
	}

	let result = [];

	for (let i = 0; i < row; i++) {
		result.push(arr.slice(i * col, col + i * col));
	}

	return result.map((numbers) => numbers.join(' ')).join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
