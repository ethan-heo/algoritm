import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-4948.js');

describe('백준 4948 - 베르트랑 공준', () => {
	it('예제 입력 1', () => {
		const input = `
			1
			10
			13
			100
			1000
			10000
			100000
			0
		`;
		const expected = `1\n4\n3\n21\n135\n1033\n8392`;

		expect(solution(input)).toBe(expected);
	});
});
