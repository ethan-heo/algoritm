import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1152.js');

describe('백준 1152 - 단어의 개수', () => {
	it('예제 입력 1', () => {
		const input = `The Curious Case of Benjamin Button`;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = ` The first character is a blank `;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `The last character is a blank `;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `The last character is a blank `;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});
});
