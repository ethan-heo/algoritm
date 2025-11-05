/**
 * 백준 10811번 - 바구니 뒤집기
 * https://www.acmicpc.net/problem/10811
 */
function solution(input) {
	const [arrInfo, ...changingBaskets] = input.trim().split('\n');
	const [length] = arrInfo.trim().split(' ').map(Number);
	const arr = Array.from({ length }).map((_, idx) => idx + 1);

	for (const [start, end] of changingBaskets.map((basket) =>
		basket.trim().split(' ').map(Number)
	)) {
		/**
		 * 이 알고리즘의 핵심은 교환 횟수를 구하는 것
		 * Math.floor((end - start + 1) / 2)
		 * end - start + 1 => 범위의 실제 길이
		 * 이를 나눈 2와 내림을 한 것은 짝수일 때는 반으로 나누는 것이 딱 떨어지지만
		 * 홀수는 가운데 수가 동일한 교환이기 때문에 불필요한 수이기 떄문이다.
		 *
		 * 범위의 실제 길이는 시작점과 끝점 사이의 거리에 +1을 더한 것.
		 * 거리는 거쳐가는 점을 계산하지 않기 때문에 +1을 더한 것임
		 */
		for (let i = 0, len = Math.floor((end - start + 1) / 2); i < len; i++) {
			[arr[start - 1 + i], arr[end - 1 - i]] = [arr[end - 1 - i], arr[start - 1 + i]];
		}
	}

	return arr.join(' '); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
