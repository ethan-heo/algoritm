/**
 * 백준 1000번 - A+B
 * https://www.acmicpc.net/problem/1000
 *
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */
function solution(input) {
	const [a, b] = input.split(' ').map(Number);
	return a + b;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
