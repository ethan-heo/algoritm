import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-15649.js');

describe('백준 15649 - N과 M', () => {
	it('예제 입력 1', () => {
		const input = `3 1`;
		const expected = `1\n2\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `4 2`;
		const expected = `1 2\n1 3\n1 4\n2 1\n2 3\n2 4\n3 1\n3 2\n3 4\n4 1\n4 2\n4 3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `4 4`;
		const expected = `1 2 3 4\n1 2 4 3\n1 3 2 4\n1 3 4 2\n1 4 2 3\n1 4 3 2\n2 1 3 4\n2 1 4 3\n2 3 1 4\n2 3 4 1\n2 4 1 3\n2 4 3 1\n3 1 2 4\n3 1 4 2\n3 2 1 4\n3 2 4 1\n3 4 1 2\n3 4 2 1\n4 1 2 3\n4 1 3 2\n4 2 1 3\n4 2 3 1\n4 3 1 2\n4 3 2 1`;

		expect(solution(input)).toBe(expected);
	});
});
