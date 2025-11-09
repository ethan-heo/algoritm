import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2738.js');

describe('백준 2738 - 행렬 덧셈', () => {
	it('예제 입력 1', () => {
		const input = `
			3 3
			1 1 1
			2 2 2
			0 1 0
			3 3 3
			4 4 4
			5 5 100
		`;
		const expected = `4 4 4\n6 6 6\n5 6 100`;

		expect(solution(input)).toBe(expected);
	});

	it('1x4 행렬', () => {
		const input = `
			1 4
			1 2 3 4
			5 6 7 8
		`;
		const expected = `6 8 10 12`;

		expect(solution(input)).toBe(expected);
	});

	it('4x1 행렬', () => {
		const input = `
			4 1
			1
			2
			3
			4
			5
			6
			7
			8
		`;
		const expected = `6\n8\n10\n12`;

		expect(solution(input)).toBe(expected);
	});

	it('2x5 행렬', () => {
		const input = `
			2 5
			1 2 3 4 5
			6 7 8 9 10
			10 9 8 7 6
			5 4 3 2 1
		`;
		const expected = `11 11 11 11 11\n11 11 11 11 11`;

		expect(solution(input)).toBe(expected);
	});

	it('5x2 행렬', () => {
		const input = `
			5 2
			1 2
			3 4
			5 6
			7 8
			9 10
			0 1
			2 3
			4 5
			6 7
			8 9
		`;
		const expected = `1 3\n5 7\n9 11\n13 15\n17 19`;

		expect(solution(input)).toBe(expected);
	});

	it('3x6 행렬', () => {
		const input = `
			3 6
			1 0 1 0 1 0
			2 1 2 1 2 1
			3 2 3 2 3 2
			0 1 0 1 0 1
			1 2 1 2 1 2
			2 3 2 3 2 3
		`;
		const expected = `1 1 1 1 1 1\n3 3 3 3 3 3\n5 5 5 5 5 5`;

		expect(solution(input)).toBe(expected);
	});
});
