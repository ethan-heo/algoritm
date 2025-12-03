import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11650.js');

describe('백준 11650 - 좌표 정렬하기', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			3 4
			1 1
			1 -1
			2 2
			3 3
		`;
		const expected = `1 -1\n1 1\n2 2\n3 3\n3 4`;

		expect(solution(input)).toBe(expected);
	});
});
