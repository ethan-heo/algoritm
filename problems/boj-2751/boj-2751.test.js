import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2751.js');

describe('백준 2751 - 수 정렬하기 2', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			5
			4
			3
			2
			1
		`;
		const expected = `1\n2\n3\n4\n5`;

		expect(solution(input)).toBe(expected);
	});
});
