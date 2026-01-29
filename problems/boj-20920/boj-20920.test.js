import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-20920.js');

describe('백준 20920 - 영단어 암기는 괴로워', () => {
	it('예제 입력 1', () => {
		const input = `
		7 4
		apple
		ant
		sand
		apple
		append
		sand
		sand
		`;
		const expected = `sand\napple\nappend`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = `
			12 5
			appearance
			append
			attendance
			swim
			swift
			swift
			swift
			mouse
			wallet
			mouse
			ice
			age
		`;
		const expected = `swift\nmouse\nappearance\nattendance\nappend\nwallet`;

		expect(solution(input)).toBe(expected);
	});
});
