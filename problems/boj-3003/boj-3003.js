/**
 * 백준 3003번 - 킹, 퀸, 룩, 비숍, 나이트, 폰
 * https://www.acmicpc.net/problem/3003
 */
function solution(input) {
	const corrects = [1, 1, 2, 2, 2, 8];
	const inputToArr = input.split(' ');

	for (let i = 0, len = corrects.length; i < len; i++) {
		corrects[i] = corrects[i] - Number(inputToArr[i]);
	}

	return corrects.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
