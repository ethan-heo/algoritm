import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10773.js');

describe('백준 10773 - 제로', () => {
	it('예제 입력 1', () => {
		const input = `
			4
			3
			0
			4
			0
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			10
			1
			3
			5
			4
			0
			0
			7
			0
			0
			6
		`;
		const expected = `7`;

		expect(solution(input)).toBe(expected);
	});
});
