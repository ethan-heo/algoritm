/**
 * 백준 10814번 - 나이순 정렬
 * https://www.acmicpc.net/problem/10814
 */
function solution(input) {
	let [, ...회원들] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());

	회원들 = 회원들.map((회원) => 회원.split(' '));

	return 회원들
		.sort((회원1, 회원2) => {
			const [회원1_나이] = 회원1;
			const [회원2_나이] = 회원2;

			if (Number(회원1_나이) > Number(회원2_나이)) {
				return 1;
			} else if (Number(회원1_나이) < Number(회원2_나이)) {
				return -1;
			} else {
				return 0;
			}
		})
		.map((회원) => 회원.join(' '))
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
