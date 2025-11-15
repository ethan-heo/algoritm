import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9506.js');

describe('백준 9506 - 약수들의 합', () => {
	it('예제 입력 1', () => {
		const input = `
			6
			12
			28
			-1
		`;
		const expected = `6 = 1 + 2 + 3\n12 is NOT perfect.\n28 = 1 + 2 + 4 + 7 + 14`;

		expect(solution(input)).toBe(expected);
	});
});
