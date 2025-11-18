import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9063.js');

describe('백준 9063 - 대지', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			20 24
			40 21
			10 12
		`;
		const expected = `360`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			1
			15 13
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			4
			2 1
			3 2
			5 2
			3 4
		`;
		const expected = `9`;

		expect(solution(input)).toBe(expected);
	});

	// 실패하기 쉬운 엣지 케이스들
	it('모든 점이 세로 일직선상에 있는 경우', () => {
		// x좌표가 모두 같으면 가로 길이가 0
		const input = `
			5
			10 5
			10 -3
			10 0
			10 8
			10 2
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('모든 점이 가로 일직선상에 있는 경우', () => {
		// y좌표가 모두 같으면 세로 길이가 0
		const input = `
			4
			-5 10
			3 10
			0 10
			7 10
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('음수 좌표를 포함하는 경우', () => {
		// 음수와 양수 좌표가 섞인 경우
		const input = `
			4
			-10 -5
			5 10
			-3 8
			2 -7
		`;
		const expected = `255`;

		expect(solution(input)).toBe(expected);
	});

	it('최댓값 경계 케이스', () => {
		// -10000 ~ 10000 범위의 최대 직사각형
		const input = `
			4
			-10000 -10000
			10000 10000
			0 0
			5000 -5000
		`;
		const expected = `400000000`;

		expect(solution(input)).toBe(expected);
	});

	it('점이 2개만 있는 경우', () => {
		// 점이 2개만 있을 때 대각선으로 떨어진 경우
		const input = `
			2
			3 7
			10 2
		`;
		const expected = `35`;

		expect(solution(input)).toBe(expected);
	});

	it('모든 좌표가 음수인 경우', () => {
		// x, y 모두 음수인 좌표들
		const input = `
			4
			-5 -3
			-10 -8
			-2 -1
			-7 -6
		`;
		const expected = `56`;

		expect(solution(input)).toBe(expected);
	});

	it('음수 범위에서 점이 하나만 있는 경우', () => {
		// 음수 좌표 1개
		const input = `
			1
			-100 -200
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});
});
