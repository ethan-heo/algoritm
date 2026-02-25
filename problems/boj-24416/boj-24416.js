/**
 * 백준 24416번 - 알고리즘 수업 - 피보나치 수 1
 * https://www.acmicpc.net/problem/24416
 */
function solution(input) {
	const result = [0, 0];
	const fibonacci = (num) => {
		if (num === 1 || num === 2) {
			result[0] += 1;
			return 1;
		} else {
			return fibonacci(num - 1) + fibonacci(num - 2);
		}
	};

	const fibonacciForLoop = (num) => {
		for (let i = 3; i <= num; i++) {
			result[1] += 1;
		}
	};

	fibonacci(Number(input));
	fibonacciForLoop(Number(input));

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
