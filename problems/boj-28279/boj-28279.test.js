import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-28279.js');

describe('백준 28279 - 덱 2', () => {
	it('예제 입력 1', () => {
		const input = `
			11
			6
			1 3
			1 8
			7
			8
			3
			2 5
			1 2
			5
			4
			4
		`;
		const expected = `1\n8\n3\n8\n3\n5\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 1: 원소 하나만 넣고 앞에서 제거', () => {
		const input = `
			2
			1 5
			3
		`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 2: 원소 하나만 넣고 뒤에서 제거', () => {
		const input = `
			2
			2 7
			4
		`;
		const expected = `7`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 3: 원소 하나 남은 상태에서 제거', () => {
		const input = `
			6
			1 1
			1 2
			1 3
			3
			3
			3
		`;
		const expected = `3\n2\n1`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 4: 원소 하나만 있을 때 조회 후 제거', () => {
		const input = `
			5
			2 9
			7
			8
			3
			4
		`;
		const expected = `9\n9\n9\n-1`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 5: 앞뒤로 번갈아 넣고 하나 남은 상태에서 제거', () => {
		const input = `
			7
			1 10
			2 20
			3
			4
			5
			3
			4
		`;
		const expected = `10\n20\n0\n-1\n-1`;

		expect(solution(input)).toBe(expected);
	});
});
