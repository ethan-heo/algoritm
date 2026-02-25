import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24416.js');

describe('백준 24416 - 알고리즘 수업 - 피보나치 수 1', () => {
	it('예제 입력 1', () => {
		const input = `5`;
		const expected = `5 3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `30`;
		const expected = `832040 28`;

		expect(solution(input)).toBe(expected);
	});
});
