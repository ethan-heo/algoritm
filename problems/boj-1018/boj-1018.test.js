import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1018.js');

describe('백준 1018 - 체스판 다시 칠하기', () => {
	it('예제 입력 1', () => {
		const input = `
			8 8
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
			BWBBBWBW
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
			BWBWBWBW
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			10 13
			BBBBBBBBWBWBW
			BBBBBBBBBWBWB
			BBBBBBBBWBWBW
			BBBBBBBBBWBWB
			BBBBBBBBWBWBW
			BBBBBBBBBWBWB
			BBBBBBBBWBWBW
			BBBBBBBBBWBWB
			WWWWWWWWWWBWB
			WWWWWWWWWWBWB
		`;
		const expected = `12`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			8 8
			BWBWBWBW
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `
			9 23
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBB
			BBBBBBBBBBBBBBBBBBBBBBW
		`;
		const expected = `31`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `
			10 10
			BBBBBBBBBB
			BBWBWBWBWB
			BWBWBWBWBB
			BBWBWBWBWB
			BWBWBWBWBB
			BBWBWBWBWB
			BWBWBWBWBB
			BBWBWBWBWB
			BWBWBWBWBB
			BBBBBBBBBB
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 6', () => {
		const input = `
			8 8
			WBWBWBWB
			BWBWBWBW
			WBWBWBWB
			BWBBBWBW
			WBWBWBWB
			BWBWBWBW
			WBWBWWWB
			BWBWBWBW
		`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 7', () => {
		const input = `
			11 12
			BWWBWWBWWBWW
			BWWBWBBWWBWW
			WBWWBWBBWWBW
			BWWBWBBWWBWW
			WBWWBWBBWWBW
			BWWBWBBWWBWW
			WBWWBWBBWWBW
			BWWBWBWWWBWW
			WBWWBWBBWWBW
			BWWBWBBWWBWW
			WBWWBWBBWWBW
		`;
		const expected = `15`;

		expect(solution(input)).toBe(expected);
	});
});
