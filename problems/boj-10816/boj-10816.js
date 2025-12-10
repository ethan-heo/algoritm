/**
 * 백준 10816번 - 숫자 카드2
 * https://www.acmicpc.net/problem/10816
 */
function solution(input) {
	let [, cards, , numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	numbers = numbers.split(' ');

	const numberMap = new Map();

	for (const number of numbers) {
		numberMap.set(number, 0);
	}

	for (const card of cards.split(' ')) {
		const numberCount = numberMap.get(card);

		if (numberCount === undefined) continue;

		numberMap.set(card, numberCount + 1);
	}

	return numbers.map((number) => numberMap.get(number)).join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
