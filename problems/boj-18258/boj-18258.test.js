import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-18258.js');

describe('백준 18258 - 큐2', () => {
	it('예제 입력 1', () => {
		const input = `
			15
			push 1
			push 2
			front
			back
			size
			empty
			pop
			pop
			pop
			size
			empty
			pop
			push 3
			empty
			front
		`;
		const expected = `1\n2\n2\n0\n1\n2\n-1\n0\n1\n-1\n0\n3`;

		expect(solution(input)).toBe(expected);
	});
});
