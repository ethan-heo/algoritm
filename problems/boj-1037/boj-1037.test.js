import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1037.js');

describe('백준 1037 - 약수', () => {
	it('예제 입력 1', () => {
		const input = `
			2
			4 2
		`;
		const expected = `8`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			1
			2
		`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			6
			3 4 2 12 6 8
		`;
		const expected = `24`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `
			14
			14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596
		`;
		const expected = `185192`;

		expect(solution(input)).toBe(expected);
	});
});
