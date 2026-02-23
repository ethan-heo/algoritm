/**
 * 백준 14888번 - 연산자 끼워넣기
 * https://www.acmicpc.net/problem/14888
 */
function solution(input) {
	const [, numbers, operatorList] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));
	const totalCount = operatorList.reduce((sum, op) => sum + op, 0);
	const operatorCounts = operatorList.reduce(
		(acc, num, idx) => {
			switch (idx) {
				case 0:
					acc['+'] += num;
					break;
				case 1:
					acc['-'] += num;
					break;
				case 2:
					acc['*'] += num;
					break;
				case 3:
					acc['/'] += num;
					break;
			}

			return acc;
		},
		{ '+': 0, '-': 0, '*': 0, '/': 0 }
	);
	const operators = Object.keys(operatorCounts);
	let result = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

	function backtrack(current, counts) {
		// 종료 조건
		if (current.length === totalCount) {
			let sum = numbers[0];

			for (let i = 1, len = numbers.length; i < len; i++) {
				switch (current[i - 1]) {
					case '+':
						sum += numbers[i];
						break;
					case '-':
						sum -= numbers[i];
						break;
					case '*':
						sum *= numbers[i];
						break;
					case '/':
						sum = Math.trunc(sum / numbers[i]);
						break;
				}
			}

			result[0] = Math.max(result[0], sum);
			result[1] = Math.min(result[1], sum);

			return;
		}

		for (const op of operators) {
			if (counts[op] > 0) {
				// 선택
				counts[op]--;
				current.push(op);

				// 재귀
				backtrack(current, counts);

				// 복구
				current.pop();
				counts[op]++;
			}
		}
	}

	backtrack([], { ...operatorCounts });

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
