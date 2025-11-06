/**
 * 백준 10809번 - 알파벳 찾기
 * https://www.acmicpc.net/problem/10809
 */
function solution(input) {
	const alphabets = Array.from({ length: 26 }).fill(-1);
	const ALPHABET_START_ASCII = 97;
	const arr = input.split('');

	for (let i = 0, len = arr.length; i < len; i++) {
		const idx = arr[i].charCodeAt(0) - ALPHABET_START_ASCII;

		if (alphabets[idx] !== -1) continue;

		alphabets[idx] = i;
	}

	return alphabets.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
