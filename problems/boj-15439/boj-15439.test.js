import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-15439.js');

describe('백준 15439 - 베라의 패션', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `5`;
		const expected = `20`;

		expect(solution(input)).toBe(expected);
	});
});
