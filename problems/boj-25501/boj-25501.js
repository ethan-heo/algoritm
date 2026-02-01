/**
 * 백준 25501번 - 재귀의 귀재
 * https://www.acmicpc.net/problem/25501
 *
 * 문자열이 팰린드롬인지 확인하고 재귀 함수가 몇번 호출되는지 반환하는 문제
 * - 재귀함수 자체는 문제에서 C++ 코드로 제공. 이를 JavaScript로 변환.
 * - 객체를 주입할 수 있는 인자를 추가해 함수 호출 수를 파악.
 * 	- 클로저를 사용해 외부 컨텍스트에 있는 변수를 활용할 수 있지만 그렇게 되면 특정 컨텍스트에 재귀함수가 종속되버리기 때문에 가독성이나 성능 측면에서도 좋지 않다고 생각.
 *
 */
function solution(input) {
	const [, ...strings] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	const recursive = (str, left, right, debug) => {
		debug.count++;
		if (left >= right) return 1;
		else if (str.at(left) !== str.at(right)) return 0;
		else return recursive(str, left + 1, right - 1, debug);
	};

	const result = [];

	for (const str of strings) {
		const debug = { count: 0 };
		const isPalindrome = recursive(str, 0, str.length - 1, debug);

		result.push(`${isPalindrome} ${debug.count}`);
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
