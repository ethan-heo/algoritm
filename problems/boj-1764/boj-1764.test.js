import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1764.js');

describe('백준 1764 - 듣보잡', () => {
	it('예제 입력 1', () => {
		const input = `
			3 4
			ohhenrie
			charlie
			baesangwook
			obama
			baesangwook
			ohhenrie
			clinton
		`;
		const expected = `2\nbaesangwook\nohhenrie`;

		expect(solution(input)).toBe(expected);
	});
});
