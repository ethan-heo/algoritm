import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-17103.js');

describe('백준 17103 - 골드바흐 파티션', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			6
			8
			10
			12
			100
		`;
		const expected = `1\n1\n2\n1\n6`;

		expect(solution(input)).toBe(expected);
	});
});
