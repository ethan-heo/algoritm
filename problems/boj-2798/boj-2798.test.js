import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2798.js');

describe('백준 2798 - 블랙잭', () => {
	it('예제 입력 1', () => {
		const input = `
			5 21
			5 6 7 8 9
		`;
		const expected = `21`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			10 500
			93 181 245 214 315 36 185 138 216 295
		`;
		const expected = `497`;

		expect(solution(input)).toBe(expected);
	});
});
