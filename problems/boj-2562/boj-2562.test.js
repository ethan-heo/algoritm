import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2562.js');

describe('백준 2562 - 최댓값', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			29
			38
			12
			57
			74
			40
			85
			61
		`;
		const expected = `85\n8`;

		expect(solution(input)).toBe(expected);
	});
});
