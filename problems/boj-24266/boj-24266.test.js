import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24266.js');

describe('백준 24266 - 알고리즘 수업 - 알고리즘의 수행 시간 5', () => {
	it('예제 입력 1', () => {
		const input = `7`;
		const expected = `343\n3`;

		expect(solution(input)).toBe(expected);
	});
});
