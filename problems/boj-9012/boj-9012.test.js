import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9012.js');

describe('백준 9012 - 괄호', () => {
	it('예제 입력 1', () => {
		const input = `
			6
			(())())
			(((()())()
			(()())((()))
			((()()(()))(((())))()
			()()()()(()()())()
			(()((())()(
		`;
		const expected = `NO\nNO\nYES\nNO\nYES\nNO`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			3
			((
			))
			())(()
		`;
		const expected = `NO\nNO\nNO`;

		expect(solution(input)).toBe(expected);
	});
});
