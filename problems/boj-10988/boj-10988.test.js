import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10988.js');

describe('백준 10988 - 팰린드롬인지 확인하기', () => {
	it('예제 입력 1', () => {
		const input = `level`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `baekjoon`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});
});
