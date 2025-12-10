import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1620.js');

describe('백준 1620 - 나는야 포켓못 마스터 이다솜', () => {
	it('예제 입력 1', () => {
		const input = `
			26 5
			Bulbasaur
			Ivysaur
			Venusaur
			Charmander
			Charmeleon
			Charizard
			Squirtle
			Wartortle
			Blastoise
			Caterpie
			Metapod
			Butterfree
			Weedle
			Kakuna
			Beedrill
			Pidgey
			Pidgeotto
			Pidgeot
			Rattata
			Raticate
			Spearow
			Fearow
			Ekans
			Arbok
			Pikachu
			Raichu
			25
			Raichu
			3
			Pidgey
			Kakuna
		`;
		const expected = `Pikachu\n26\nVenusaur\n16\n14`;

		expect(solution(input)).toBe(expected);
	});
});
