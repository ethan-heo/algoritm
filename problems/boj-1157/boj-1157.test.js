import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1157.js');

describe('백준 1157 - 단어 공부', () => {
	it('예제 입력 1', () => {
		const input = `Mississipi`;
		const expected = `?`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `zZa`;
		const expected = `Z`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `z`;
		const expected = `Z`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `baaa`;
		const expected = `A`;

		expect(solution(input)).toBe(expected);
	});
});
