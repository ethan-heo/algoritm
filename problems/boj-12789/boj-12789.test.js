import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-12789.js');

describe('백준 12789 - 도키도키 간식드리미', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			5 4 1 3 2
		`;
		const expected = `Nice`;

		expect(solution(input)).toBe(expected);
	});

	// 현재 구현의 버그를 찾는 테스트 케이스들
	it('실패 케이스 1: stack에서 즉시 꺼낼 수 있는 번호 체크 누락', () => {
		const input = `
			4
			3 2 1 4
		`;
		const expected = `Nice`;
		// 3, 2를 stack에 넣고 1 입장 후 stack에서 2, 3을 차례로 꺼내야 함
		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 2: 연속된 역순 번호', () => {
		const input = `
			5
			4 3 2 1 5
		`;
		const expected = `Nice`;
		// 4, 3, 2를 stack에 넣고 1 입장 후 stack에서 순서대로 꺼내야 함
		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 3: 작은 번호 후 순차적 증가', () => {
		const input = `
			5
			2 1 3 4 5
		`;
		const expected = `Nice`;
		// 2를 stack에 넣고 1 입장 후 즉시 2를 꺼내야 함
		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 4: 중간에 여러 번 stack 확인 필요', () => {
		const input = `
			6
			3 2 1 4 5 6
		`;
		const expected = `Nice`;
		// 3, 2를 stack에 넣고 1 입장 후 stack 확인이 필요함
		expect(solution(input)).toBe(expected);
	});

	it('실패 케이스 5: 복잡한 순서', () => {
		const input = `
			7
			5 3 2 1 4 6 7
		`;
		const expected = `Nice`;
		// 5, 3, 2를 stack에 넣고 1 입장 후 stack에서 2, 3을 꺼내고 4 입장 등
		expect(solution(input)).toBe(expected);
	});
});
