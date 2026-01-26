import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-25192.js');

describe('백준 25192 - 인사성 밝은 곰곰이', () => {
	it('예제 입력 1', () => {
		const input = `
			9
			ENTER
			pjshwa
			chansol
			chogahui05
			lms0806
			pichulia
			r4pidstart
			swoon
			tony9402
		`;
		const expected = `8`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			7
			ENTER
			pjshwa
			chansol
			chogahui05
			ENTER
			pjshwa
			chansol
		`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			3
			ENTER
			lms0806
			lms0806
		`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});
});
