import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2720.js');

describe('백준 2720 - 세탁소 사장 동혁', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			124
			25
			194
		`;
		const expected = `4 2 0 4\n1 0 0 0\n7 1 1 4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = ``;
		const expected = ``;

		expect(solution(input)).toBe(expected);
	});
});
