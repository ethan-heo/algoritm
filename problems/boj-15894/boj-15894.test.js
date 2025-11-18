import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-15894.js');

describe('백준 15894 - 수학은 체육과목 입니다', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `3`;
		const expected = `12`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `2`;
		const expected = `8`;

		expect(solution(input)).toBe(expected);
	});
});
