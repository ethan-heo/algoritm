import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1010.js');

describe('백준 1010 - 다리 놓기', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			2 2
			1 5
			13 29
		`;
		const expected = `1\n5\n67863915`;

		expect(solution(input)).toBe(expected);
	});

	it('N = M인 경우 (결과는 항상 1)', () => {
		const input = `
			3
			1 1
			5 5
			29 29
		`;
		const expected = `1\n1\n1`;

		expect(solution(input)).toBe(expected);
	});

	it('N = 1인 경우 (결과는 M)', () => {
		const input = `
			3
			1 10
			1 29
			1 2
		`;
		const expected = `10\n29\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('큰 수 조합 - 정밀도 테스트 1', () => {
		const input = `
			3
			10 20
			14 28
			15 29
		`;
		// C(20,10) = 184756, C(28,14) = 40116600, C(29,15) = 77558760
		const expected = `184756\n40116600\n77558760`;

		expect(solution(input)).toBe(expected);
	});

	it('큰 수 조합 - 정밀도 테스트 2', () => {
		const input = `
			3
			12 25
			11 23
			14 29
		`;
		// C(25,12) = 5200300, C(23,11) = 1352078, C(29,14) = 77558760
		const expected = `5200300\n1352078\n77558760`;

		expect(solution(input)).toBe(expected);
	});

	it('N이 M의 절반인 경우 (조합 값 최대)', () => {
		const input = `
			3
			13 26
			12 24
			11 22
		`;
		// C(26,13) = 10400600, C(24,12) = 2704156, C(22,11) = 705432
		const expected = `10400600\n2704156\n705432`;

		expect(solution(input)).toBe(expected);
	});

	it('M이 최대(29)이고 다양한 N', () => {
		const input = `
			4
			10 29
			5 29
			20 29
			7 29
		`;
		// C(29,10) = 20030010, C(29,5) = 118755, C(29,20) = 10015005, C(29,7) = 1560780
		const expected = `20030010\n118755\n10015005\n1560780`;

		expect(solution(input)).toBe(expected);
	});

	it('연속된 M 값들', () => {
		const input = `
			4
			10 25
			10 26
			10 27
			10 28
		`;
		// C(25,10) = 3268760, C(26,10) = 5311735, C(27,10) = 8436285, C(28,10) = 13123110
		const expected = `3268760\n5311735\n8436285\n13123110`;

		expect(solution(input)).toBe(expected);
	});

	it('N이 중간값일 때 큰 M', () => {
		const input = `
			3
			13 27
			13 28
			12 26
		`;
		// C(27,13) = 20058300, C(28,13) = 37442160, C(26,12) = 9657700
		const expected = `20058300\n37442160\n9657700`;

		expect(solution(input)).toBe(expected);
	});

	it('작은 N과 큰 M', () => {
		const input = `
			4
			2 29
			3 29
			4 29
			2 28
		`;
		// C(29,2) = 406, C(29,3) = 3654, C(29,4) = 23751, C(28,2) = 378
		const expected = `406\n3654\n23751\n378`;

		expect(solution(input)).toBe(expected);
	});
});
