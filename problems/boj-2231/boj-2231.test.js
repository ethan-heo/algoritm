import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2231.js');

describe('백준 2231 - 분해합', () => {
	it('예제 입력 1', () => {
		const input = `216`;
		const expected = `198`;

		expect(solution(input)).toBe(expected);
	});
});
