/**
 * 백준 XXXXX번 - 문제 제목
 * https://www.acmicpc.net/problem/XXXXX
 */
function solution(input) {
	// 입력 처리 예시:

	// 1. 한 줄 입력 - 숫자 하나
	// const n = parseInt(input);

	// 2. 한 줄 입력 - 공백으로 구분된 숫자들
	// const [a, b] = input.split(' ').map(Number);

	// 3. 여러 줄 입력 - 개행 문자로 구분
	// const lines = input.split('\\n');
	// const n = parseInt(lines[0]);
	// const arr = lines[1].split(' ').map(Number);

	// 4. 여러 테스트 케이스
	// const lines = input.split('\\n');
	// const t = parseInt(lines[0]);
	// for (let i = 1; i <= t; i++) {
	//   const [a, b] = lines[i].split(' ').map(Number);
	// }

	// 여기에 문제 풀이 작성

	return ''; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
