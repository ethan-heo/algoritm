import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1000.js');

describe('백준 1000 - A+B', () => {
	it('예제 입력 1', () => {
		const input = `1 2`;
		const expected = 3;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `5 7`;
		const expected = 12;

		expect(solution(input)).toBe(expected);
	});

	it('큰 수 테스트', () => {
		const input = `999 1`;
		const expected = 1000;

		expect(solution(input)).toBe(expected);
	});
});
