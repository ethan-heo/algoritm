import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-5086.js');

describe('백준 5086 - 배수와 약수', () => {
	it('예제 입력 1', () => {
		const input = `
			8 16
			32 4
			17 5
			0 0
		`;
		const expected = `factor\nmultiple\nneither`;

		expect(solution(input)).toBe(expected);
	});
});
