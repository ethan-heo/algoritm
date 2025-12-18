import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1929.js');

describe('백준 1929 - 소수 구하기', () => {
	it('예제 입력 1', () => {
		const input = `3 16`;
		const expected = `3\n5\n7\n11\n13`;

		expect(solution(input)).toBe(expected);
	});
});
