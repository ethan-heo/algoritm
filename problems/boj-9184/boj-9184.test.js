import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-9184.js');

describe('백준 9184 - 신나는 함수 실행', () => {
	it('예제 입력 1', () => {
		const input = `
			1 1 1
			2 2 2
			10 4 6
			50 50 50
			-1 7 18
			-1 -1 -1
		`;
		const expected = `w(1, 1, 1) = 2\nw(2, 2, 2) = 4\nw(10, 4, 6) = 523\nw(50, 50, 50) = 1048576\nw(-1, 7, 18) = 1`;

		expect(solution(input)).toBe(expected);
	});
});
