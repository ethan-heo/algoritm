import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2941.js');

describe('백준 2941 - 크로아티아 알파벳', () => {
	it('예제 입력 1', () => {
		const input = `ljes=njak`;
		const expected = `6`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `ddz=z=`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `nljj`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `c=c=`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `dz=ak`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});
});
