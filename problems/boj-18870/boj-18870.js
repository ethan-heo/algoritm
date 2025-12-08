/**
 * 백준 18870번 - 좌표 압축
 * https://www.acmicpc.net/problem/18870
 */
function solution(input) {
	let [, numberList] = input.trim().split('\n');

	const numbers = numberList
		.trim()
		.split(' ')
		.map((str) => Number(str.trim()));
	const numberMap = Array.from(new Set(numbers))
		.sort((a, b) => a - b)
		.reduce((acc, number, idx) => ((acc[number] = idx), acc), {}); // 인덱스 찾는 용도
	const arr = []; // 새로 반환할 배열

	for (let i = 0, len = numbers.length; i < len; i++) {
		arr.push(numberMap[numbers[i]]);
	}

	return arr.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
