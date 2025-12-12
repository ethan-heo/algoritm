import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11478.js');

describe('백준 11478 - 서로 다른 부분 문자열의 개수', () => {
	it('예제 입력 1', () => {
		const input = `ababc`;
		const expected = `12`;

		expect(solution(input)).toBe(expected);
	});
});
