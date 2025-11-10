import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2563.js');

describe('백준 2563 - 색종이', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			3 7
			15 7
			5 2
		`;
		const expected = `260`;

		expect(solution(input)).toBe(expected);
	});

	it('단일 색종이', () => {
		const input = `
			1
			0 0
		`;
		const expected = `100`;

		expect(solution(input)).toBe(expected);
	});

	it('겹치지 않는 두 색종이', () => {
		const input = `
			2
			0 0
			20 20
		`;
		const expected = `200`;

		expect(solution(input)).toBe(expected);
	});

	it('부분적으로 겹치는 두 색종이', () => {
		const input = `
			2
			0 0
			5 5
		`;
		const expected = `175`;

		expect(solution(input)).toBe(expected);
	});

	it('완전히 겹치는 두 색종이', () => {
		const input = `
			2
			10 10
			10 10
		`;
		const expected = `100`;

		expect(solution(input)).toBe(expected);
	});

	it('여러 색종이가 다양하게 겹치는 경우', () => {
		const input = `
			4
			0 0
			5 0
			0 5
			5 5
		`;
		const expected = `225`;

		expect(solution(input)).toBe(expected);
	});
});
