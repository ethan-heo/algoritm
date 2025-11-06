import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9086.js');

describe('백준 9086 - 문자열', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			ACDKJFOWIEGHE
			O
			AB
		`;
		const expected = `AE\nOO\nAB`;

		expect(solution(input)).toBe(expected);
	});
});
