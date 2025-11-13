import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2903.js');

describe('백준 2903 - 중앙 이동 알고리즘', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `9`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2`;
		const expected = `25`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `5`;
		const expected = `1089`;

		expect(solution(input)).toBe(expected);
	});
});
