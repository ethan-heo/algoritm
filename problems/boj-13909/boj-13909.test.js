import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-13909.js');

describe('백준 13909 - 창문 닫기', () => {
	it('예제 입력 1', () => {
		const input = `3`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `24`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});
});
