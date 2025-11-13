/**
 * 백준 2720번 - 세탁소 사장 동혁
 * https://www.acmicpc.net/problem/2720
 */
function solution(input) {
	const [, ...changes] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const CURRENCY_UNIT = [25, 10, 5, 1];
	let result = [];

	for (let change of changes) {
		change = Number(change);
		let unitCount = [];

		for (const unit of CURRENCY_UNIT) {
			const count = Math.floor(change / unit);

			unitCount.push(count);

			change -= count * unit;
		}

		result.push(unitCount.join(' '));
	}

	return result.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
