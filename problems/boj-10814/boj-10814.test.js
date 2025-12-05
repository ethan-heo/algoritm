import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10814.js');

describe('백준 10814 - 나이순 정렬', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			21 Junkyu
			21 Dohyun
			20 Sunyoung
		`;
		const expected = `20 Sunyoung\n21 Junkyu\n21 Dohyun`;

		expect(solution(input)).toBe(expected);
	});
});
