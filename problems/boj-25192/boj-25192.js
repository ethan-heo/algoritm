/**
 * 백준 25192번 - 인사성 밝은 곰곰이
 * https://www.acmicpc.net/problem/25192
 *
 * "ENTER" 키워드가 나온 이후
 * 	- 모든 첫번째 채팅은 이모티콘
 *  - 첫번째 이후 채팅은 모두 이모티콘이 아님
 *  -> Set을 사용해 중복된 채팅(아이디) 없이 적재
 *  - 이후 ENTER 키워드가 나온다면
 * 	-> Set 내부 사이즈를 결과값에 추가 후 초기화
 */
function solution(input) {
	const [, ...chats] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const record = new Set();
	let result = 0;

	for (const chat of chats) {
		if (chat === 'ENTER') {
			result += record.size;
			record.clear();
		} else {
			record.add(chat);
		}
	}

	result += record.size;

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
