import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1546.js');

describe('백준 1546 - 평균', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			40 80 60
		`;
		const expected = 75.0;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 2', () => {
		const input = `
			3
			10 20 30
		`;
		const expected = 66.666667;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 3', () => {
		const input = `
			4
			1 100 100 100
		`;
		const expected = 75.25;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 4', () => {
		const input = `
			5
			1 2 4 8 16
		`;
		const expected = 38.75;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 5', () => {
		const input = `
			2
			3 10
		`;
		const expected = 65.0;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 6', () => {
		const input = `
			4
			10 20 0 100
		`;
		const expected = 32.5;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 7', () => {
		const input = `
			1
			50
		`;
		const expected = 100.0;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});

	it('예제 입력 8', () => {
		const input = `
			9
			10 20 30 40 50 60 70 80 90
		`;
		const expected = 55.55555555555556;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 2);
	});
});
