import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10870.js');

describe('백준 10870 - 피보나치 수 5', () => {
	it('예제 입력 1', () => {
		const input = `10`;
		const expected = `55`;

		expect(solution(input)).toBe(expected);
	});
});
