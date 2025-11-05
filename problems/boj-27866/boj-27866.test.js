import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-27866.js');

describe('백준 27866 - 문자와 문자열', () => {
	it('예제 입력 1', () => {
		const input = `
			Sprout
			3
		`;
		const expected = `r`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			shiftpsh
			6
		`;
		const expected = `p`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			Baekjoon
			4
		`;
		const expected = `k`;

		expect(solution(input)).toBe(expected);
	});
});
