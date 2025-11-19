import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-5073.js');

describe('백준 5073 - 삼각형과 세 변', () => {
	it('예제 입력 1', () => {
		const input = `
			7 7 7
			6 5 4
			3 2 5
			6 2 6
			0 0 0
		`;
		const expected = `Equilateral\nScalene\nInvalid\nIsosceles`;

		expect(solution(input)).toBe(expected);
	});
});
