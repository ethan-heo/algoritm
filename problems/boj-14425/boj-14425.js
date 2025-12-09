/**
 * 백준 14425번 - 문자열 집합
 * https://www.acmicpc.net/problem/14425
 */
function solution(input) {
	let [info, ...words] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const [setCount] = info.split(' ').map(Number);
	const setWords = new Set(words.slice(0, setCount));

	words = words.slice(setCount);

	let result = 0;

	for (const word of words) {
		setWords.has(word) && result++;
	}

	return `${result}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
