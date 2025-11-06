import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2675.js');

describe('백준 2675 - 문자열 반복', () => {
	it('예제 입력 1', () => {
		const input = `
			2
			3 ABC
			5 /HTP
		`;
		const expected = `AAABBBCCC\n/////HHHHHTTTTTPPPPP`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = ``;
		const expected = ``;

		expect(solution(input)).toBe(expected);
	});
});
