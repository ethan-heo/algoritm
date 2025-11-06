import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-3003.js');

describe('백준 3003 - 킹, 퀸, 룩, 비숍, 나이트, 폰', () => {
	it('예제 입력 1', () => {
		const input = `0 1 2 2 2 7`;
		const expected = `1 0 0 0 0 1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2 1 2 1 2 1`;
		const expected = `-1 0 0 1 0 7`;

		expect(solution(input)).toBe(expected);
	});
});
