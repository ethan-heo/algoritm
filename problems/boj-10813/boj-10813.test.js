import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10813.js');

describe('백준 10813 - 공 바꾸기', () => {
	it('예제 입력 1', () => {
		const input = `
			5 4
			1 2
			3 4
			1 4
			2 2
		`;
		const expected = `3 1 4 2 5`;

		expect(solution(input)).toBe(expected);
	});
});
