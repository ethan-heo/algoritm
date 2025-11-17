import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-27323.js');

describe('백준 27323 - 직사각형', () => {
	it('예제 입력 1', () => {
		const input = `
			2
			3
		`;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			100
			1
		`;
		const expected = `100`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			4
			4
		`;
		const expected = `16`;

		expect(solution(input)).toBe(expected);
	});
});
