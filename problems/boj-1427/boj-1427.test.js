import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1427.js');

describe('백준 1427 - 소트인사이드', () => {
	it('예제 입력 1', () => {
		const input = `2143`;
		const expected = `4321`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `999998999`;
		const expected = `999999998`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `61423`;
		const expected = `64321`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `500613009`;
		const expected = `965310000`;

		expect(solution(input)).toBe(expected);
	});
});
