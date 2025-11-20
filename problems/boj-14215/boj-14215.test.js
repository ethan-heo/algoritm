import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-14215.js');

describe('백준 14215 - 세 막대', () => {
	it('예제 입력 1', () => {
		const input = `1 2 3`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2 2 2`;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `1 100 1`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `41 64 16`;
		const expected = `113`;

		expect(solution(input)).toBe(expected);
	});
});
