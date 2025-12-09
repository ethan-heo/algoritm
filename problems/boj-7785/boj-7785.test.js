import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-7785.js');

describe('백준 7785 - 회사에 있는 사람', () => {
	it('예제 입력 1', () => {
		const input = `
			4
			Baha enter
			Askar enter
			Baha leave
			Artem enter
		`;
		const expected = `Askar\nArtem`;

		expect(solution(input)).toBe(expected);
	});
});
