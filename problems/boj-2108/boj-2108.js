/**
 * 백준 2108번 - 통계학
 * https://www.acmicpc.net/problem/2108
 *
 * 4가지의 알고리즘이 필요
 *
 * 1. 산술 평균
 * 	- 주어진 숫자들의 평균값을 구함
 * 	- 소숫점 자리수는 반올림으로 처리
 *
 * 2. 중앙값
 * 	- 주어진 숫자들을 오름차순으로 정렬 후 중앙값을 구함.
 * 	- 주어진 숫자들이 항상 홀수이기 때문에 그에 대한 중앙값만 구하면 해결
 * 	- 정렬시 참조된 모든 값이 변경되기 때문에 배열 복사 후 진행
 *
 * 3. 최빈값
 * 	- 주어진 숫자들 중 중복된 숫자를 가진 숫자 중 가장 큰 숫자를 구하는 문제.
 * 	- 추가 조건은 중복된 숫자가 동일한 경우 두번째 값을 답으로 처리 -> 두번째 값이란 숫자 크기 비교군중 두번째 값이라는 의미
 * 	- Map을 사용해 숫자와 중복값을 매핑 -> 가장 큰 중복값으로 숫자를 분류 -> 분류된 숫자가 2개 초과인 경우 인덱스를 1, 그렇지 않으면 인덱스를 -1 -> 분류된 숫자를 정렬 후 구한 인덱스 값으로 찾아 반환
 *
 * 4. 범위
 * 	- 주어진 숫자의 크기가 최대, 최소인 값을 구해 뺀 값을 반환.
 * 	- Math.max, Math.min을 사용해 최대, 최소값을 구해 뺀값을 반환하여 해결
 */
function solution(input) {
	const [len, ...numbers] = input
		.trim()
		.split('\n')
		.map((str) => Number(str.trim()));
	const result = [];

	// 1. 산술 평균
	result.push(Math.round(numbers.reduce((acc, number) => acc + number, 0) / len));

	// 2. 중앙값
	result.push(
		numbers
			.slice()
			.sort((a, b) => a - b)
			.at(Math.floor(len / 2))
	);

	// 3. 최빈값
	const countingMap = new Map();

	for (const number of numbers) {
		countingMap.set(number, (countingMap.get(number) ?? 0) + 1);
	}

	const maxCount = Math.max(...countingMap.values());
	const maxCountNumbers = [];

	for (const [number, count] of countingMap.entries()) {
		if (maxCount === count) {
			maxCountNumbers.push(number);
		}
	}

	let lastIdx = maxCountNumbers.length > 2 ? 1 : -1;

	result.push(maxCountNumbers.sort((a, b) => a - b).at(lastIdx));

	// 4. 범위
	result.push(Math.max(...numbers) - Math.min(...numbers));

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
