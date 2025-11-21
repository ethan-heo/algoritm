import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24263.js');

describe('백준 24263 - 알고리즘 수업 - 알고리즘의 수행 시간 2', () => {
	it('예제 입력 1', () => {
		const input = `7`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});
});
