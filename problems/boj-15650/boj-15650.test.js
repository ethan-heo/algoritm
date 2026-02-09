import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-15650.js');

describe('백준 15650 - N과 M(2)', () => {
	it('예제 입력 1', () => {
		const input = `3 1`;
		const expected = `1\n2\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `4 2`;
		const expected = `1 2\n1 3\n1 4\n2 3\n2 4\n3 4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `4 4`;
		const expected = `1 2 3 4`;

		expect(solution(input)).toBe(expected);
	});
});
