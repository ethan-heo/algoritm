/**
 * 백준 2580번 - 스도쿠
 * https://www.acmicpc.net/problem/2580
 */
function solution(input) {
	const board = input
		.trim()
		.split('\n')
		.map((str) => str.trim().split(' ').map(Number));

	// 1. 빈 칸(0인 위치) 찾기
	const emptyCells = findEmptyCells(board);

	// 2. 백트래킹으로 스도쿠 풀기
	solve(board, emptyCells, 0);

	// 3. 결과 출력 형식 맞추기
	return board.map((row) => row.join(' ')).join('\n');
}

/**
 * 빈 칸(0인 위치)을 찾아서 좌표 배열로 반환
 */
function findEmptyCells(board) {
	const emptyCells = [];
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				emptyCells.push([i, j]);
			}
		}
	}
	return emptyCells;
}

/**
 * 특정 위치에 숫자를 놓을 수 있는지 유효성 검사
 */
function isValid(board, row, col, num) {
	// 1. 같은 행에 num이 있는지 확인
	for (let j = 0; j < 9; j++) {
		if (board[row][j] === num) return false;
	}

	// 2. 같은 열에 num이 있는지 확인
	for (let i = 0; i < 9; i++) {
		if (board[i][col] === num) return false;
	}

	// 3. 같은 3×3 박스에 num이 있는지 확인
	const boxRow = Math.floor(row / 3) * 3;
	const boxCol = Math.floor(col / 3) * 3;

	for (let i = boxRow; i < boxRow + 3; i++) {
		for (let j = boxCol; j < boxCol + 3; j++) {
			if (board[i][j] === num) return false;
		}
	}

	return true;
}

/**
 * 백트래킹으로 스도쿠 풀기
 */
function solve(board, emptyCells, index) {
	// 기저 조건: 모든 빈 칸을 채웠으면 성공
	if (index === emptyCells.length) {
		return true;
	}

	const [row, col] = emptyCells[index];

	// 1~9까지 시도
	for (let num = 1; num <= 9; num++) {
		if (isValid(board, row, col, num)) {
			board[row][col] = num; // 선택 (Choose)

			if (solve(board, emptyCells, index + 1)) {
				return true; // 성공하면 즉시 종료
			}

			board[row][col] = 0; // 백트래킹 (Unchoose)
		}
	}

	return false; // 1~9 모두 실패
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
