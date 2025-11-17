import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2581.js');

describe('백준 2581 - 소수', () => {
	it('예제 입력 1', () => {
		const input = `
			60
			100
		`;
		const expected = `620\n61`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			64
			65
		`;
		const expected = `-1`;

		expect(solution(input)).toBe(expected);
	});

	it('2부터 10까지의 소수', () => {
		const input = `
			2
			10
		`;
		const expected = `17\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('1만 있는 경우 (소수 없음)', () => {
		const input = `
			1
			1
		`;
		const expected = `-1`;

		expect(solution(input)).toBe(expected);
	});

	it('2만 있는 경우 (가장 작은 소수)', () => {
		const input = `
			2
			2
		`;
		const expected = `2\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('10부터 20까지의 소수', () => {
		const input = `
			10
			20
		`;
		const expected = `60\n11`;

		expect(solution(input)).toBe(expected);
	});

	it('20부터 30까지의 소수', () => {
		const input = `
			20
			30
		`;
		const expected = `52\n23`;

		expect(solution(input)).toBe(expected);
	});

	it('1부터 5까지 (1은 소수가 아님)', () => {
		const input = `
			1
			5
		`;
		const expected = `10\n2`; // 소수: 2, 3, 5 (합: 10, 최소: 2)

		expect(solution(input)).toBe(expected);
	});
});
