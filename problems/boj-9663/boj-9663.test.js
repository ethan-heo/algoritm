import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9663.js');

describe('백준 9663 - N-Queen', () => {
	it('예제 입력 1', () => {
		const input = `8`;
		const expected = `92`;

		expect(solution(input)).toBe(expected);
	});
});
