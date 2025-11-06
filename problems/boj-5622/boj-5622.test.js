import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-5622.js');

describe('백준 5622 - 다이얼', () => {
	it('예제 입력 1', () => {
		const input = `WA`;
		const expected = `13`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `UNUCIC`;
		const expected = `36`;

		expect(solution(input)).toBe(expected);
	});
});
