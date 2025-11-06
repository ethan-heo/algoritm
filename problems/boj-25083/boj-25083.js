/**
 * 백준 25083번 - 새싹
 * https://www.acmicpc.net/problem/25083
 */
function solution(input) {
	console.log("         ,r'\"7");
	console.log("r`-_   ,'  ,/");
	console.log(" \\. \". L_r'");
	console.log("   `~\\/");
	console.log("      |");
	console.log("      |");
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
