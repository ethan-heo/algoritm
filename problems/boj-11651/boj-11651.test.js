import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11651.js');

describe('백준 11651 - 좌표 정렬하기2', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			0 4
			1 2
			1 -1
			2 2
			3 3
		`;
		const expected = `1 -1\n1 2\n2 2\n3 3\n0 4`;

		expect(solution(input)).toBe(expected);
	});
});
