import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2485.js');

describe('백준 2485 - 가로수', () => {
	it('예제 입력 1', () => {
		const input = `
			4
			1
			3
			7
			13
		`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			4
			2
			6
			12
			18
		`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});
});
