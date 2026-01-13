import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24511.js');

describe('백준 24511 - queuestack', () => {
	it('예제 입력 1', () => {
		const input = `
			4
			0 1 1 0
			1 2 3 4
			3
			2 4 7
		`;
		const expected = `4 1 2`;

		expect(solution(input)).toBe(expected);
	});
});
