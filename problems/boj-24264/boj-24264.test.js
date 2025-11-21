import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24264.js');

describe('백준 24264 - 알고리즘 수업 - 알고리즘의 수행 시간 3', () => {
	it('예제 입력 1', () => {
		const input = `7`;
		const expected = `49\n2`;

		expect(solution(input)).toBe(expected);
	});
});
