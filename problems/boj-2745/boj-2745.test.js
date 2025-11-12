import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2745.js');

describe('백준 2745 - 진법 변환', () => {
	// it('예제 입력 1', () => {
	// 	const input = `ZZZZZ 36`;
	// 	const expected = `60466175`;

	// 	expect(solution(input)).toBe(expected);
	// });

	it('2진법 변환', () => {
		const input = `1001 2`;
		const expected = `9`;

		expect(solution(input)).toBe(expected);
	});

	// it('16진법 한 자리 변환', () => {
	// 	const input = `A 16`;
	// 	const expected = `10`;

	// 	expect(solution(input)).toBe(expected);
	// });

	// it('16진법 여러 자리 변환', () => {
	// 	const input = `ABC 16`;
	// 	const expected = `2748`;

	// 	expect(solution(input)).toBe(expected);
	// });

	// it('10진법 변환', () => {
	// 	const input = `123 10`;
	// 	const expected = `123`;

	// 	expect(solution(input)).toBe(expected);
	// });

	// it('36진법 단일 문자', () => {
	// 	const input = `Z 36`;
	// 	const expected = `35`;

	// 	expect(solution(input)).toBe(expected);
	// });
});
