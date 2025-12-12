import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1269.js');

describe('백준 1269 - 대칭 차집합', () => {
	it('예제 입력 1', () => {
		const input = `
			3 5
			1 2 4
			2 3 4 5 6
		`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});
});
