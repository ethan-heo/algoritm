import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-14888.js');

describe('백준 14888 - 연산자 끼워넣기', () => {
	it('예제 입력 1', () => {
		const input = `
			2
			5 6
			0 0 1 0
		`;
		const expected = `30\n30`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			3
			3 4 5
			1 0 1 0
		`;
		const expected = `35\n17`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			6
			1 2 3 4 5 6
			2 1 1 1
		`;
		const expected = `54\n-24`;

		expect(solution(input)).toBe(expected);
	});
});
