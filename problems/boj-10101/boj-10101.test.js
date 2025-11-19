import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10101.js');

describe('백준 10101 - 삼각형 외우기', () => {
	it('예제 입력 1', () => {
		const input = `
			60
			70
			50
		`;
		const expected = `Scalene`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			60
			60
			60
		`;
		const expected = `Equilateral`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `
			50
			50
			80
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});

	// 실패 테스트 케이스들 - 이등변삼각형 버그 검증
	it('실패 케이스 1: 큰 각이 같은 이등변삼각형', () => {
		const input = `
			70
			70
			40
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 2: 큰 각이 같은 이등변삼각형 (80도)', () => {
		const input = `
			80
			80
			20
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 3: 큰 각이 같은 이등변삼각형 (75도)', () => {
		const input = `
			75
			75
			30
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 4: 큰 각이 같은 이등변삼각형 (85도)', () => {
		const input = `
			85
			85
			10
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 5: 큰 각이 같은 이등변삼각형 (65도)', () => {
		const input = `
			65
			65
			50
		`;
		const expected = `Isosceles`;

		expect(solution(input)).toBe(expected);
	});
});
