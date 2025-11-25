import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24313.js');

describe('백준 24313 - 알고리즘 수업 - 점근적 표기 1', () => {
	it('예제 입력 1', () => {
		const input = `
			7 7
			8
			1
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			7 7
			8
			10
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});
});
