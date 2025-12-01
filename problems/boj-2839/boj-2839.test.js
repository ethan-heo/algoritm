import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2839.js');

describe('백준 2839 - 설탕 배달', () => {
	it('예제 입력 1', () => {
		const input = `18`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `4`;
		const expected = `-1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `6`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `9`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `11`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});
});
