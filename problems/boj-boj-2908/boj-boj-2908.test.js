import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-boj-2908.js');

describe('백준 boj-2908 - 상수', () => {
	it('예제 입력 1', () => {
		const input = `734 893`;
		const expected = `437`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `221 231`;
		const expected = `132`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `839 237`;
		const expected = `938`;

		expect(solution(input)).toBe(expected);
	});
});
