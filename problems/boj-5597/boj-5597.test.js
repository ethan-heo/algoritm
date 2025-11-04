import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-5597.js');

describe('백준 5597 - 과제 안 내신 분', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			1
			4
			5
			7
			9
			6
			10
			11
			12
			13
			14
			15
			16
			17
			18
			19
			20
			21
			22
			23
			24
			25
			26
			27
			28
			29
			30
		`;
		const expected = `2\n8`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			9
			30
			6
			12
			10
			20
			21
			11
			7
			5
			28
			4
			18
			29
			17
			19
			27
			13
			16
			26
			14
			23
			22
			15
			3
			1
			24
			25
		`;
		const expected = `2\n8`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			9
			30
			6
			12
			10
			20
			21
			11
			7
			5
			28
			4
			18
			29
			17
			19
			27
			13
			16
			26
			14
			23
			22
			15
			3
			2
			24
			25
		`;
		const expected = `1\n8`;

		expect(solution(input)).toBe(expected);
	});
});
