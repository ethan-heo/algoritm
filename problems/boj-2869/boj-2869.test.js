import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-2869.js');

describe('백준 2869 - 달팽이는 올라가고 싶다', () => {
	it('예제 입력 1', () => {
		const input = `2 1 5`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `5 1 6`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `100 99 1000000000`;
		const expected = `999999901`;

		expect(solution(input)).toBe(expected);
	});

	it('테스트 케이스 4 - 첫날 도달', () => {
		const input = `10 1 10`;
		const expected = `1`;

		expect(solution(input)).toBe(expected);
	});

	it('테스트 케이스 5 - 작은 진행', () => {
		const input = `3 1 10`;
		const expected = `5`;

		expect(solution(input)).toBe(expected);
	});

	it('테스트 케이스 6 - 중간 크기', () => {
		const input = `10 5 15`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('테스트 케이스 7 - 일반적인 경우', () => {
		const input = `8 3 20`;
		const expected = `4`;

		expect(solution(input)).toBe(expected);
	});

	it('테스트 케이스 8 - 큰 숫자', () => {
		const input = `45 35 945`;
		const expected = `91`;

		expect(solution(input)).toBe(expected);
	});
});
