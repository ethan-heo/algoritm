import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1978.js');

describe('백준 1978 - 소수 찾기', () => {
	it('예제 입력 1', () => {
		const input = `
			4
			1 3 5 7
		`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});
});
