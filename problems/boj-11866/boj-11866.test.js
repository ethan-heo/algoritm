import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11866.js');

describe('백준 11866 - 요세푸스 문제 0', () => {
	it('예제 입력 1', () => {
		const input = `7 3`;
		const expected = `<3, 6, 2, 7, 5, 1, 4>`;

		expect(solution(input)).toBe(expected);
	});
});
