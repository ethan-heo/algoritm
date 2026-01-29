/**
 * 백준 27433번 - 팩토리얼2
 * https://www.acmicpc.net/problem/27433
 *
 * 팩토리얼을 재귀로 처리하는 문제
 * - 화살표 함수의 식별자를 함수의 내부에서 호출하여 처리
 * - 반환 조건은 n이 0일 때 1을 반환
 */
function solution(input) {
	const factorial = (n) => {
		if (n === 0) return 1;
		return n * factorial(n - 1);
	};

	return factorial(Number(input)).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
