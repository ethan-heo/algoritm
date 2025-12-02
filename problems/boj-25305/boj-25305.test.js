import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-25305.js');

describe('백준 25305 - 커트라인', () => {
	it('예제 입력 1', () => {
		const input = `
			5 2
			100 76 85 93 98
		`;
		const expected = `98`;

		expect(solution(input)).toBe(expected);
	});
});
