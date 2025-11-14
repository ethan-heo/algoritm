import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2292.js');

describe('백준 2292 - 벌집', () => {
	it('예제 입력 1', () => {
		const input = `13`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `12`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `58`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});
});
