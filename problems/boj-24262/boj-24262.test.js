import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24262.js');

describe('백준 24262 - 알고리즘 수업 - 알고리즘의 수행 시간 1', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `1\n0`;

		expect(solution(input)).toBe(expected);
	});
});
