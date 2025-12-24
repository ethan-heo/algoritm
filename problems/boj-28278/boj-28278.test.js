import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-28278.js');

describe('백준 28278 - 스택2', () => {
	it('예제 입력 1', () => {
		const input = `
			9
			4
			1 3
			1 5
			3
			2
			5
			2
			2
			5
		`;
		const expected = `1\n2\n5\n3\n3\n-1\n-1`;

		expect(solution(input)).toBe(expected);
	});
});
