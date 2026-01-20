import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11050.js');

describe('백준 11050 - 이항 계수1', () => {
	it('예제 입력 1', () => {
		const input = `5 2`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});
});
