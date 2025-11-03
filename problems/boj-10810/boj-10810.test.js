import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10810.js');

describe('백준 10810 - 공 넣기', () => {
	it('예제 입력 1', () => {
		const input = `
			5 4
			1 2 3
			3 4 4
			1 4 1
			2 2 2
		`;
		const expected = `1 2 1 1 0`;

		expect(solution(input)).toBe(expected);
	});
});
