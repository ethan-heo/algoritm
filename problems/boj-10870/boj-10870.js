/**
 * 백준 10870번 - 피보나치 수 5
 * https://www.acmicpc.net/problem/10870
 *
 * 피보내치의 수를 재귀를 사용해 풀기
 *
 * - 0과 1은 이전 두 수를 구하지 못하기 때문에 입력 즉시 반환 처리
 * - 주어진 입력값에서 이전 두 수를 더하기 위해 fibonacci 함수 식별자를 사용해 이전 두 수에 대한 입력값을 추가하고 더하면 됨.
 * - 재귀는 평가 시점에서 값이 처리되기 때문에 입력값에 대한 순서만 인지하고 있으면 쉽게 풀 수 있음
 */
function solution(input) {
	const fibonacci = (n) => {
		if (n === 0 || n === 1) return n;

		return fibonacci(n - 1) + fibonacci(n - 2);
	};

	return fibonacci(Number(input)).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
