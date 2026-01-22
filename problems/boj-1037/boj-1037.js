/**
 * 백준 1037번 - 약수
 * https://www.acmicpc.net/problem/1037
 *
 * 문제에서 "어떤 수 N의 진짜 약수가 모두 주어질 때" 라는 의미는 최소공배수의 배수가 되는 약수들을 제외한 모든 약수를 제공한다는 뜻.
 * 그러므로 가장 작은 약수와 가장 큰 약수를 찾아 곱하면 끝인 문제
 */
function solution(input) {
	const [, numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	return (Math.min(...numbers) * Math.max(...numbers)).toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
