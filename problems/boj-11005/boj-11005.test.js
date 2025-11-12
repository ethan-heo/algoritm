import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11005.js');

describe('백준 11005 - 진법 변환 2', () => {
	it('예제 입력 1', () => {
		const input = `60466175 36`;
		const expected = `ZZZZZ`;

		expect(solution(input)).toBe(expected);
	});

	it('2진법 변환', () => {
		const input = `9 2`;
		const expected = `1001`;

		expect(solution(input)).toBe(expected);
	});

	it('16진법 한 자리 변환', () => {
		const input = `10 16`;
		const expected = `A`;

		expect(solution(input)).toBe(expected);
	});

	it('16진법 여러 자리 변환', () => {
		const input = `2748 16`;
		const expected = `ABC`;

		expect(solution(input)).toBe(expected);
	});

	it('10진법 변환', () => {
		const input = `123 10`;
		const expected = `123`;

		expect(solution(input)).toBe(expected);
	});

	it('36진법 단일 문자', () => {
		const input = `35 36`;
		const expected = `Z`;

		expect(solution(input)).toBe(expected);
	});

	it('나머지가 0인 경우 - 10진법', () => {
		const input = `10 10`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});

	it('나머지가 0인 경우 - 16진법', () => {
		const input = `16 16`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});

	it('나머지가 0인 경우 - 8진법', () => {
		const input = `8 8`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});

	it('나머지가 0인 경우 - 20진법', () => {
		const input = `20 20`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});

	it('큰 수 변환 - 8진법', () => {
		const input = `1000 8`;
		const expected = `1750`;

		expect(solution(input)).toBe(expected);
	});
});
