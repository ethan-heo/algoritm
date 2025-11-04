import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-3052.js');

describe('백준 3052 - 나머지', () => {
	it('예제 입력 1', () => {
		const input = `
			1
			2
			3
			4
			5
			6
			7
			8
			9
			10
		`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			42
			84
			252
			420
			840
			126
			42
			84
			420
			126
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			39
			40
			41
			42
			43
			44
			82
			83
			84
			85
		`;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});
});
