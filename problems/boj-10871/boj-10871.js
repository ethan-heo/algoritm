/**
 * 백준 10871번 - x보다 작은 수
 * https://www.acmicpc.net/problem/10871
 */
function solution(input) {
	const [data, numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const [, comparingNumber] = data.split(' ');

	const result = [];

	for (const number of numbers.split(' ')) {
		if (Number(number) < Number(comparingNumber)) {
			result.push(number);
		}
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
