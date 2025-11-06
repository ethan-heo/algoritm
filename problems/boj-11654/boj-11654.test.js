import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11654.js');

describe('백준 11654 - 아스키 코드', () => {
	it('예제 입력 1', () => {
		const input = `A`;
		const expected = `65`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `C`;
		const expected = `67`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `0`;
		const expected = `48`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `9`;
		const expected = `57`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `a`;
		const expected = `97`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 6', () => {
		const input = `z`;
		const expected = `122`;

		expect(solution(input)).toBe(expected);
	});
});
