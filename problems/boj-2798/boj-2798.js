/**
 * 백준 2798번 - 블랙잭
 * https://www.acmicpc.net/problem/2798
 */
function solution(input) {
	const [[, limit], numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	let max = Number.MIN_SAFE_INTEGER;

	for (let i = 0, len = numbers.length; i < len; i++) {
		const num1 = numbers[i];
		for (let j = i + 1; j < len; j++) {
			const num2 = numbers[j];
			for (let k = j + 1; k < len; k++) {
				if (num1 + num2 + numbers[k] <= limit) {
					max = Math.max(max, num1 + num2 + numbers[k]);
				}
			}
		}
	}

	return `${max}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
