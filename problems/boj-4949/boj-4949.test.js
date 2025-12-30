import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-4949.js');

describe('백준 4949 - 균형잡힌 세상', () => {
	it('예제 입력 1', () => {
		const input = `
			So when I die (the [first] I will see in (heaven) is a score list).
			[ first in ] ( first out ).
			Half Moon tonight (At least it is better than no Moon at all].
			A rope may form )( a trail in a maze.
			Help( I[m being held prisoner in a fortune cookie factory)].
			([ (([( [ ] ) ( ) (( ))] )) ]).
			.
			.
		`;
		const expected = `yes\nyes\nno\nno\nno\nyes\nyes`;

		expect(solution(input)).toBe(expected);
	});
});
