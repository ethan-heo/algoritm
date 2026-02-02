/**
 * 백준 24060번 - 알고리즘 수업 - 병합 정렬 1
 * https://www.acmicpc.net/problem/24060
 *
 * 수도 코드의 병합 정렬 내용을 코드로 작성해 주어진 숫자(순서)에 맞는 빈 배열에 저장되는 값을 반환하는 문제
 *
 *
 *
 */
function solution(input) {
	let [[, count], numbers] = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	let result = -1;

	const mergeSort = (arr, p, r) => {
		if (p < r) {
			const q = Math.floor((p + r) / 2);
			mergeSort(arr, p, q);
			mergeSort(arr, q + 1, r);
			merge(arr, p, q, r);
		}
	};

	const merge = (arr, p, q, r) => {
		const tmp = [];
		let i = p;
		let j = q + 1;
		let t = 0;

		while (i <= q && j <= r) {
			if (arr[i] <= arr[j]) {
				tmp[t++] = arr[i++];
			} else {
				tmp[t++] = arr[j++];
			}
		}

		while (i <= q) tmp[t++] = arr[i++];

		while (j <= r) tmp[t++] = arr[j++];

		i = p;
		t = 0;
		while (i <= r) {
			if (--count === 0) {
				result = tmp[t];
			}
			arr[i++] = tmp[t++];
		}
	};

	mergeSort(numbers, 0, numbers.length - 1);

	return result.toString(); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
