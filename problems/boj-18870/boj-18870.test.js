import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-18870.js');

describe('백준 18870 - 좌표 압축', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			2 4 -10 4 -9
		`;
		const expected = `2 3 0 3 1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			6
			1000 999 1000 999 1000 999
		`;
		const expected = `1 0 1 0 1 0`;

		expect(solution(input)).toBe(expected);
	});
});
