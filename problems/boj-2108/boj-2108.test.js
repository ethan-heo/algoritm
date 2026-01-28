import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2108.js');

describe('백준 2108 - 통계학', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			1
			3
			8
			-2
			2
		`;
		const expected = `2\n2\n1\n10`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			1
			4000
		`;
		const expected = `4000\n4000\n4000\n0`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			5
			-1
			-2
			-3
			-1
			-2
		`;
		const expected = `-2\n-2\n-1\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			3
			0
			0
			-1
		`;
		const expected = `0\n0\n0\n1`;

		expect(solution(input)).toBe(expected);
	});

	// 추가 엣지 케이스
	it('최빈값이 여러 개일 때 두 번째로 작은 값 출력', () => {
		const input = `
			5
			1
			1
			2
			2
			3
		`;
		// 평균: (1+1+2+2+3)/5 = 9/5 = 1.8 → 2
		// 중앙값: 2
		// 최빈값: 1과 2가 각각 2번 → 두 번째로 작은 값인 2
		// 범위: 3-1 = 2
		const expected = `2\n2\n2\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('음수 평균 반올림 (-0.5 경계)', () => {
		const input = `
			3
			-1
			0
			0
		`;
		// 평균: (-1+0+0)/3 = -0.333... → 0 (반올림)
		// 중앙값: 0
		// 최빈값: 0 (2번)
		// 범위: 0-(-1) = 1
		const expected = `0\n0\n0\n1`;

		expect(solution(input)).toBe(expected);
	});

	it('모든 값이 다른 최빈값 (여러 개 중 두 번째)', () => {
		const input = `
			3
			3
			1
			2
		`;
		// 평균: (3+1+2)/3 = 2
		// 중앙값: 2
		// 최빈값: 모두 1번 → 두 번째로 작은 값인 2
		// 범위: 3-1 = 2
		const expected = `2\n2\n2\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('극단적인 값 범위 (-4000 ~ 4000)', () => {
		const input = `
			3
			-4000
			0
			4000
		`;
		// 평균: (-4000+0+4000)/3 = 0
		// 중앙값: 0
		// 최빈값: 모두 1번 → 두 번째로 작은 값인 0
		// 범위: 4000-(-4000) = 8000
		const expected = `0\n0\n0\n8000`;

		expect(solution(input)).toBe(expected);
	});

	it('음수만 있는 경우 최빈값 여러 개', () => {
		const input = `
			7
			-1
			-1
			-2
			-2
			-3
			-3
			-4
		`;
		// 평균: (-1-1-2-2-3-3-4)/7 = -16/7 = -2.28... → -2
		// 중앙값: -2
		// 최빈값: -1, -2, -3 각 2번 → 두 번째로 작은 값인 -2
		// 범위: -1-(-4) = 3
		const expected = `-2\n-2\n-2\n3`;

		expect(solution(input)).toBe(expected);
	});
});
