import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10816.js');

describe('백준 10816 - 숫자 카드2', () => {
	it('예제 입력 1', () => {
		const input = `
			10
			6 3 2 10 10 10 -10 -10 7 3
			8
			10 9 -5 2 3 4 5 -10
		`;
		const expected = `3 0 0 1 2 0 0 2`;

		expect(solution(input)).toBe(expected);
	});
});
