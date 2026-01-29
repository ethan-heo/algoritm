/**
 * 백준 20920번 - 영단어 암기는 괴로워
 * https://www.acmicpc.net/problem/20920
 *
 * 주어진 우선순위에 따라 단어의 순서를 변경하는 문제
 *
 * 제약
 * 	- 문자열 길이가 4 이상인 단어만 포함
 *
 * 우선순위
 * 	- 우선순위가 높을 수록 앞에 위치
 * 	1. 자주 등장하는 단어가 앞에 위치
 * 	2. 단어의 길이가 길 수록 앞에 위치
 * 	3. 알파벳 사전순으로 앞에 위치할 수록 앞에 위치
 *
 * 설계
 *  - 사전에 우선순위에 대한 정보를 미리 수집 후 정렬
 *
 * 구현
 * 	1. Map을 사용해 순회하면서 1, 2번 우선순위 정보를 수집
 * 	2. Map.keys()는 중복키값을 제거하여 줌으로써 이를 활용해 정렬에 사용
 * 	3. 정보를 바탕으로 우선순위에 따라 반환값을 지정해줌.
 * 		- 3번 우선순위는 단순 비교만으로 해결 가능.
 */
function solution(input) {
	const [info, ...chars] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const [, limit] = info.split(' ').map(Number);
	const charInfo = new Map();

	for (const char of chars) {
		if (char.length < limit) {
			continue;
		}
		const info = charInfo.get(char) ?? {
			count: 0,
			length: 0,
		};

		info.count++;
		!charInfo.has(char) && (info.length = char.length);

		charInfo.set(char, info);
	}

	return Array.from(charInfo.keys())
		.sort((a, b) => {
			const aInfo = charInfo.get(a);
			const bInfo = charInfo.get(b);

			// 우선순위 1. 자주등장하는 단어가 우선
			if (aInfo.count > bInfo.count) {
				return -1;
			}
			if (aInfo.count < bInfo.count) {
				return 1;
			}

			// 우선순위 2. 단어의 길이가 길 수록 앞에 위치
			if (aInfo.length > bInfo.length) {
				return -1;
			}

			if (aInfo.length < bInfo.length) {
				return 1;
			}

			// 우선순위 3. 알파벳 사전순으로 앞에 단어일 수록 앞에 위치

			return a < b ? -1 : 1;
		})
		.join('\n'); // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
