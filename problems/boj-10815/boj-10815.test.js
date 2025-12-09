import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10815.js');

describe('백준 10815 - 숫자 카드', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			6 3 2 10 -10
			8
			10 9 -5 2 3 4 5 -10
		`;
		const expected = `1 0 0 1 1 0 0 1`;

		expect(solution(input)).toBe(expected);
	});
});
