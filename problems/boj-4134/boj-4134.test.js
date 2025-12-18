import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-4134.js');

describe('백준 4134 - 다음 소수', () => {
	it('예제 입력 1', () => {
		const input = `
			3
			6
			20
			100
		`;
		const expected = `7\n23\n101`;

		expect(solution(input)).toBe(expected);
	});

	it('완전제곱수 테스트 - 4', () => {
		const input = `
			1
			4
		`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});

	it('완전제곱수 테스트 - 9', () => {
		const input = `
			1
			9
		`;
		const expected = `11`;

		expect(solution(input)).toBe(expected);
	});

	it('엣지 케이스 - 0', () => {
		const input = `
			1
			0
		`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('엣지 케이스 - 1', () => {
		const input = `
			1
			1
		`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('완전제곱수 테스트 - 25', () => {
		const input = `
			1
			25
		`;
		const expected = `29`;

		expect(solution(input)).toBe(expected);
	});

	it('완전제곱수 테스트 - 49', () => {
		const input = `
			1
			49
		`;
		const expected = `53`;

		expect(solution(input)).toBe(expected);
	});

	it('완전제곱수 테스트 - 121', () => {
		const input = `
			1
			121
		`;
		const expected = `127`;

		expect(solution(input)).toBe(expected);
	});

	it('복합 테스트 - 모든 실패 케이스', () => {
		const input = `
			7
			0
			1
			4
			9
			25
			49
			121
		`;
		const expected = `2\n2\n5\n11\n29\n53\n127`;

		expect(solution(input)).toBe(expected);
	});
});
