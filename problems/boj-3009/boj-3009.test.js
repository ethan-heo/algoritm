import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-3009.js');

describe('백준 3009 - 네번째 점', () => {
	it('예제 입력 1', () => {
		const input = `
			5 5
			5 7
			7 5
		`;
		const expected = `7 7`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			30 20
			10 10
			10 20
		`;
		const expected = `30 10`;

		expect(solution(input)).toBe(expected);
	});
});
