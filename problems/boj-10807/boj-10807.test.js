import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10807.js');

describe('백준 10807 - 개수_세기', () => {
	it('예제 입력 1', () => {
		const input = `
			11
			1 4 1 2 4 2 4 2 3 4 4
			2
		`;
		const expected = 3;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			11
			1 4 1 2 4 2 4 2 3 4 4
			5
		`;
		const expected = 0;

		expect(solution(input)).toBe(expected);
	});
});
