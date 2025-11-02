import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10818.js');

describe('백준 10818 - 최소, 최대', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			20 10 35 30 7
		`;
		const expected = `7 35`;

		expect(solution(input)).toBe(expected);
	});
});
