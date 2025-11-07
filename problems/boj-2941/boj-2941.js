/**
 * 백준 2941번 - 크로아티아 알파벳
 * https://www.acmicpc.net/problem/2941
 */
function solution(input) {
	const alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

	for (const alphabet of alphabets) {
		input = input.replace(new RegExp(alphabet, 'g'), '*');
	}

	return `${input.length}`;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
