import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10809.js');

describe('백준 10809 - 알파벳 찾기', () => {
	it('예제 입력 1', () => {
		const input = `baekjoon`;
		const expected = `1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1`;

		expect(solution(input)).toBe(expected);
	});
});
