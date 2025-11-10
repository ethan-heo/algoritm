/**
 * 백준 10798번 - 세로읽기
 * https://www.acmicpc.net/problem/10798
 */
function solution(input) {
	const strList = input
		.split('\n')
		.filter(Boolean)
		.map((str) => str.trim());
	const maxLength = Math.max(...strList.map((str) => str.length));
	let result = '';
	const getChar = (char) => char ?? '';

	for (let i = 0; i < maxLength; i++) {
		result += `${getChar(strList[0][i])}${getChar(strList[1][i])}${getChar(strList[2][i])}${getChar(strList[3][i])}${getChar(strList[4][i])}`;
	}

	return result; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
