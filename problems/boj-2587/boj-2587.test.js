import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2587.js');

describe('백준 2587 - 대푯값2', () => {
	it('예제 입력 1', () => {
		const input = `
			10
			40
			30
			60
			30
		`;
		const expected = `34\n30`;

		expect(solution(input)).toBe(expected);
	});
});
