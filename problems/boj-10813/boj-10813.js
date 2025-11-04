/**
 * 백준 10813번 - 공 바꾸기
 * https://www.acmicpc.net/problem/10813
 */
function solution(input) {
	const [info, ...exchangeInfo] = input.trim().split('\n');
	const [length, loopCount] = info.trim().split(' ').map(Number);
	const result = Array.from({ length }).map((_, idx) => idx + 1);
	const exchangeArr = exchangeInfo.map((info) => info.trim().split(' ').map(Number));

	for (let i = 0; i < loopCount; i++) {
		const [idx1, idx2] = exchangeArr[i].map((idx) => idx - 1);

		[result[idx1], result[idx2]] = [result[idx2], result[idx1]];
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
