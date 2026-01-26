import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-26069.js');

describe('백준 26069 - 붙임성 좋은 총총이', () => {
	it('예제 입력 1', () => {
		const input = `
			12
			bnb2011 chansol
			chansol chogahui05
			chogahui05 jthis
			jthis ChongChong
			jthis jyheo98
			jyheo98 lms0806
			lms0806 pichulia
			pichulia pjshwa
			pjshwa r4pidstart
			r4pidstart swoon
			swoon tony9402
			tony9402 bnb2011
		`;
		const expected = `10`;

		expect(solution(input)).toBe(expected);
	});
});
