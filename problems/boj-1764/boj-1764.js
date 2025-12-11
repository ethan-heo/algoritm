/**
 * 백준 1764번 - 듣보잡
 * https://www.acmicpc.net/problem/1764
 */
function solution(input) {
	const [info, ...names] = input
		.trim()
		.split('\n')
		.map((str) => str.trim());
	const [듣스수] = info.split(' ').map(Number);
	const 듣스 = new Set(names.slice(0, 듣스수));
	const 볻스 = names.slice(듣스수);
	const 결과 = [];

	for (const 볻 of 볻스) {
		if (듣스.has(볻)) {
			결과.push(볻);
		}
	}

	return `${결과.length}\n${결과
		.sort((a, b) => {
			for (let i = 0, len = a.length; i < len; i++) {
				if (!a[i] || !b[i]) break;

				const aCode = a.charCodeAt(i);
				const bCode = b.charCodeAt(i);

				if (aCode === bCode) continue;

				if (aCode > bCode) {
					return 1;
				} else {
					return -1;
				}
			}

			return 0;
		})
		.join('\n')}`; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
