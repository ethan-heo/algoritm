import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2501.js');

describe('백준 2501 - 약수 구하기', () => {
	it('예제 입력 1', () => {
		const input = `6 3`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `25 4`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `2735 1`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});
});
