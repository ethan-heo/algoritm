import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1934.js');

describe('백준 1934 - 최소공배수', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			1 45000
			6 10
			13 17
		`;
		const expected = `45000\n30\n221`;

		expect(solution(input)).toBe(expected);
	});
});
