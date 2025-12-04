import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1181.js');

describe('백준 1181 - 단어 정렬', () => {
	it('예제 입력 1', () => {
		const input = `
			13
			but
			i
			wont
			hesitate
			no
			more
			no
			more
			it
			cannot
			wait
			im
			yours
		`;
		const expected = `i\nim\nit\nno\nbut\nmore\nwait\nwont\nyours\ncannot\nhesitate`;

		expect(solution(input)).toBe(expected);
	});
});
