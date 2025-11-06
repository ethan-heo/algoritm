import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11718.js');

describe('백준 11718 - 그대로 출력하기', () => {
	it('예제 입력 1', () => {
		const input = `Hello\nBaekjoon\nOnline Judge`;
		const expected = `Hello\nBaekjoon\nOnline Judge`;

		expect(solution(input)).toBe(expected);
	});
});
