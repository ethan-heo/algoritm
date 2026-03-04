import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1904.js');

describe('백준 1904 - 01타일', () => {
	it('예제 입력 1', () => {
		const input = `4`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});
});
