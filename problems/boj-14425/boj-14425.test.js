import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-14425.js');

describe('백준 14425 - 문자열 집합', () => {
	it('예제 입력 1', () => {
		const input = `
			5 11
			baekjoononlinejudge
			startlink
			codeplus
			sundaycoding
			codingsh
			baekjoon
			codeplus
			codeminus
			startlink
			starlink
			sundaycoding
			codingsh
			codinghs
			sondaycoding
			startrink
			icerink
		`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});
});
