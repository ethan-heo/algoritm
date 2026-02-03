import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-4779.js');

describe('백준 4779 - 칸토어 집합', () => {
	it('예제 입력 1', () => {
		const input = `
			0
			1
			3
			2
		`;
		const expected = `-\n- -\n- -   - -         - -   - -\n- -   - -`;

		expect(solution(input)).toBe(expected);
	});
});
