import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2743.js');

describe('백준 2743 - 단어 길이 재기', () => {
	it('예제 입력 1', () => {
		const input = `pulljima`;
		const expected = `8`;

		expect(solution(input)).toBe(expected);
	});
});
