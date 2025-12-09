/**
 * 백준 10815번 - 숫자 카드
 * https://www.acmicpc.net/problem/10815
 */
function solution(input) {
	let [, cards, , numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	cards = new Set(cards.split(' '));
	numbers = numbers.split(' ');

	const result = [];

	for (const number of numbers) {
		result.push(cards.has(number) ? 1 : 0);
	}

	return result.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
