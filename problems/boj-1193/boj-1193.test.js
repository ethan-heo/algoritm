import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1193.js');

describe('백준 1193 - 분수찾기', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `1/1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2`;
		const expected = `1/2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `3`;
		const expected = `2/1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `4`;
		const expected = `3/1`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `5`;
		const expected = `2/2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 6', () => {
		const input = `6`;
		const expected = `1/3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 7', () => {
		const input = `7`;
		const expected = `1/4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 8', () => {
		const input = `8`;
		const expected = `2/3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 9', () => {
		const input = `9`;
		const expected = `3/2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 10', () => {
		const input = `14`;
		const expected = `2/4`;

		expect(solution(input)).toBe(expected);
	});
});
