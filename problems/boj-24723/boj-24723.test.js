import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-24723.js');

describe('백준 24723 - 녹색 거탑', () => {
	it('예제 입력 1', () => {
		const input = `1`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `2`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('n=3일 때', () => {
		const input = `3`;
		const expected = `8`;

		expect(solution(input)).toBe(expected);
	});

	it('n=4일 때', () => {
		const input = `4`;
		const expected = `16`;

		expect(solution(input)).toBe(expected);
	});

	it('n=5일 때', () => {
		const input = `5`;
		const expected = `32`;

		expect(solution(input)).toBe(expected);
	});

	it('n=0일 때 (경계값)', () => {
		const input = `0`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('n=10일 때 (큰 값)', () => {
		const input = `10`;
		const expected = `1024`;

		expect(solution(input)).toBe(expected);
	});
});
