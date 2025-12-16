import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1735.js');

describe('백준 1735 - 분수 합', () => {
	it('예제 입력 1', () => {
		const input = `
			2 7
			3 5
		`;
		const expected = `31 35`;

		expect(solution(input)).toBe(expected);
	});
});
