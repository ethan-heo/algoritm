import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1316.js');

describe('백준 1316 - 그룹 단어 체커', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			happy
			new
			year
		`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			4
			aba
			abab
			abcabc
			a
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			5
			ab
			aa
			aca
			ba
			bb
		`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `
			2
			yzyzy
			zyzyz
		`;
		const expected = `0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `
			1
			z
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 6', () => {
		const input = `
			9
			aaa
			aaazbz
			babb
			aazz
			azbz
			aabbaa
			abacc
			aba
			zzaz
		`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});
});
