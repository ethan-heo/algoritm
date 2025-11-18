import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-11653.js');

describe('백준 11653 - 소인수분해', () => {
	it('예제 입력 1', () => {
		const input = `72`;
		const expected = `2\n2\n2\n3\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `3`;
		const expected = `3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 3', () => {
		const input = `6`;
		const expected = `2\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 4', () => {
		const input = `9991`;
		const expected = `97\n103`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 5', () => {
		const input = `1`;
		const expected = undefined;

		expect(solution(input)).toBe(expected);
	});

	// 틀리기 쉬운 엣지 케이스들
	it('큰 소수 - 성능 테스트', () => {
		// 큰 소수는 반복문이 끝까지 돌아야 하므로 시간 초과 가능성
		const input = `9999991`;
		const expected = `9999991`;

		expect(solution(input)).toBe(expected);
	});

	it('2의 거듭제곱 - 많은 소인수', () => {
		// 2^20 = 1048576, 같은 소인수가 많이 반복되는 케이스
		const input = `1048576`;
		const expected = `2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2`;

		expect(solution(input)).toBe(expected);
	});

	it('큰 소수의 제곱', () => {
		// 3163^2 = 10004569는 범위 밖이므로 3001^2 = 9006001
		const input = `9006001`;
		const expected = `3001\n3001`;

		expect(solution(input)).toBe(expected);
	});

	it('두 개의 큰 소수의 곱', () => {
		// 1999 * 2003 = 4003997
		// 중간 크기의 소수 두 개의 곱
		const input = `4003997`;
		const expected = `1999\n2003`;

		expect(solution(input)).toBe(expected);
	});

	it('작은 소인수들의 곱 - 출력 형식 체크', () => {
		// 2 * 3 * 5 * 7 * 11 * 13 = 30030
		const input = `30030`;
		const expected = `2\n3\n5\n7\n11\n13`;

		expect(solution(input)).toBe(expected);
	});

	it('최솟값 경계 - 가장 작은 소수', () => {
		// 가장 작은 소수 2
		const input = `2`;
		const expected = `2`;

		expect(solution(input)).toBe(expected);
	});

	it('3의 거듭제곱', () => {
		// 3^13 = 1594323
		const input = `1594323`;
		const expected = `3\n3\n3\n3\n3\n3\n3\n3\n3\n3\n3\n3\n3`;

		expect(solution(input)).toBe(expected);
	});

	it('같은 소수의 세제곱', () => {
		// 211^3 = 9393931
		const input = `9393931`;
		const expected = `211\n211\n211`;

		expect(solution(input)).toBe(expected);
	});

	it('최댓값 근처의 수', () => {
		// 9999998 = 2 * 4999999
		const input = `9999998`;
		const expected = `2\n4999999`;

		expect(solution(input)).toBe(expected);
	});

	it('많은 작은 소인수의 조합', () => {
		// 2^5 * 3^3 * 5^2 = 32 * 27 * 25 = 21600
		const input = `21600`;
		const expected = `2\n2\n2\n2\n2\n3\n3\n3\n5\n5`;

		expect(solution(input)).toBe(expected);
	});
});
