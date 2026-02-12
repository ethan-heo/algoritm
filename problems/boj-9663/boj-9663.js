/**
 * 백준 9663번 - N-Queen
 * https://www.acmicpc.net/problem/9663
 */
function solution(input) {
	const N = parseInt(input);

	// 체크 배열들
	const cols = new Array(N).fill(false); // 열 체크
	const diag1 = new Array(2 * N - 1).fill(false); // 대각선(↘) 체크
	const diag2 = new Array(2 * N - 1).fill(false); // 역대각선(↙) 체크

	let count = 0; // 가능한 경우의 수

	// row번째 행에 퀸을 놓는 함수
	function backtrack(row) {
		// 모든 행에 퀸을 다 놓았다 → 성공!
		if (row === N) {
			count++;
			return;
		}

		// 현재 row의 각 열(col)을 시도
		for (let col = 0; col < N; col++) {
			// 1. 현재 위치(row, col)에 퀸을 놓을 수 있는지 체크
			const d1 = row - col + (N - 1); // 대각선 번호
			const d2 = row + col; // 역대각선 번호

			// 이미 사용중이면 스킵
			if (cols[col] || diag1[d1] || diag2[d2]) {
				continue;
			}

			// 2. 퀸 배치 (상태 변경)
			cols[col] = true;
			diag1[d1] = true;
			diag2[d2] = true;

			// 3. 다음 행으로 이동
			backtrack(row + 1);

			// 4. 백트래킹 (상태 복원)
			cols[col] = false;
			diag1[d1] = false;
			diag2[d2] = false;
		}
	}

	// 0번 행부터 시작
	backtrack(0);

	return count.toString();
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
