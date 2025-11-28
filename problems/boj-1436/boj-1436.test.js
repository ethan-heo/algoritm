import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1436.js');

describe('백준 1436 - 영화감독 숌', () => {
	it('예제 입력 1', () => {
		const input = `2`;
		const expected = `1666`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `3`;
		const expected = `2666`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `6`;
		const expected = `5666`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `187`;
		const expected = `66666`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `500`;
		const expected = `166699`;

		expect(solution(input)).toBe(expected);
	});
});
