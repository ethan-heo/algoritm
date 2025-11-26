import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-19532.js');

describe('백준 19532 - 수학은 비대면강의입니다', () => {
	it('예제 입력 1', () => {
		const input = `1 3 -1 4 1 7`;
		const expected = `2 -1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2 5 8 3 -4 -11`;
		const expected = `-1 2`;

		expect(solution(input)).toBe(expected);
	});
});
