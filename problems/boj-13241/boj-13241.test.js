import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-13241.js');

describe('백준 13241 - 최소공배수', () => {
	it('예제 입력 1', () => {
		const input = `1 1`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `3 5`;
		const expected = `15`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `1 123`;
		const expected = `123`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `121 199`;
		const expected = `24079`;

		expect(solution(input)).toBe(expected);
	});
});
