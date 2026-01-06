import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2164.js');

describe('백준 2164 - 카드2', () => {
	it('예제 입력 1', () => {
		const input = `6`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});
});
