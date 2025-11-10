import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-10798.js');

describe('백준 10798 - 세로읽기', () => {
	it('예제 입력 1', () => {
		const input = `
			ABCDE
			abcde
			01234
			FGHIJ
			fghij
		`;
		const expected = `Aa0FfBb1GgCc2HhDd3IiEe4Jj`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			AABCDD
			afzz
			09121
			a8EWg6
			P5h3kx
		`;
		const expected = `Aa0aPAf985Bz1EhCz2W3D1gkD6x`;

		expect(solution(input)).toBe(expected);
	});
});
