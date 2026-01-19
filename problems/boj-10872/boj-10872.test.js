import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10872.js');

describe('백준 10872 - 팩토리얼', () => {
	it('예제 입력 1', () => {
		const input = `10`;
		const expected = `3628800`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `0`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});
});
