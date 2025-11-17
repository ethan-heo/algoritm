import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1085.js');

describe('백준 1085 - 직사각형에서 탈출', () => {
	it('예제 입력 1', () => {
		const input = `6 2 10 3`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `1 1 5 5`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `653 375 1000 1000`;
		const expected = `347`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `161 181 762 375`;
		const expected = `161`;

		expect(solution(input)).toBe(expected);
	});
});
