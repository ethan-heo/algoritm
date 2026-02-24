/**
 * 백준 14889번 - 스타트와 링크
 * https://www.acmicpc.net/problem/14889
 */
function solution(input) {
	const lines = input.trim().split('\n').map(line => line.trim());
	const n = parseInt(lines[0]);
	const S = [];
	for (let i = 0; i < n; i++) {
		S.push(lines[i + 1].split(' ').map(Number));
	}

	let minDiff = Infinity;
	const inStart = new Array(n).fill(false);

	function calcScore(members) {
		let score = 0;
		for (let i = 0; i < members.length; i++) {
			for (let j = 0; j < members.length; j++) {
				if (i !== j) score += S[members[i]][members[j]];
			}
		}
		return score;
	}

	function backtrack(idx, count, startTeam) {
		if (count === n / 2) {
			const linkTeam = [];
			for (let i = 0; i < n; i++) {
				if (!inStart[i]) linkTeam.push(i);
			}
			const diff = Math.abs(calcScore(startTeam) - calcScore(linkTeam));
			if (diff < minDiff) minDiff = diff;
			return;
		}

		// 남은 인원으로 n/2명을 채울 수 없으면 조기 종료
		const remaining = n - idx;
		const needed = n / 2 - count;
		if (remaining < needed) return;

		for (let i = idx; i < n; i++) {
			inStart[i] = true;
			startTeam.push(i);
			backtrack(i + 1, count + 1, startTeam);
			inStart[i] = false;
			startTeam.pop();
		}
	}

	backtrack(0, 0, []);

	return String(minDiff);
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
