import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24060.js');

describe('백준 24060 - 알고리즘 수업 - 병합 정렬 1', () => {
	it('예제 입력 1', () => {
		const input = `
			5 7
			4 5 1 3 2
		`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			5 13
			4 5 1 3 2
		`;
		const expected = `-1`;

		expect(solution(input)).toBe(expected);
	});
});
