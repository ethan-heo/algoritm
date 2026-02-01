import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-25501.js');

describe('백준 25501 - 재귀의 귀재', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			AAA
			ABBA
			ABABA
			ABCA
			PALINDROME
		`;
		const expected = `1 2\n1 3\n1 3\n0 2\n0 1`;

		expect(solution(input)).toBe(expected);
	});
});
