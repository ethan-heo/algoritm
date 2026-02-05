import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11729.js');

describe('백준 11729 - 하노이 탑 이동 순', () => {
	it('예제 입력 1', () => {
		const input = `3`;
		const expected = `7\n1 3\n1 2\n3 2\n1 3\n2 1\n2 3\n1 3`;

		expect(solution(input)).toBe(expected);
	});
});
