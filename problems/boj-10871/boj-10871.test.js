import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10871.js');

describe('백준 10871 - x보다 작은 수', () => {
	it('예제 입력 1', () => {
		const input = `
			10 5
			1 10 4 9 2 3 8 5 7 6
		`;
		const expected = `1 4 2 3`;

		expect(solution(input)).toBe(expected);
	});
});
