import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11720.js');

describe('백준 11720 - 숫자의 합', () => {
	it('예제 입력 1', () => {
		const input = `
			1
			1
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			5
			54321
		`;
		const expected = `15`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			25
			7000000000000000000000000
		`;
		const expected = `7`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `
			11
			10987654321
		`;
		const expected = `46`;

		expect(solution(input)).toBe(expected);
	});
});
