import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-25206.js');

describe('백준 25206 - 너의 평점은', () => {
	it('예제 입력 1', () => {
		const input = `
			ObjectOrientedProgramming1 3.0 A+
			IntroductiontoComputerEngineering 3.0 A+
			ObjectOrientedProgramming2 3.0 A0
			CreativeComputerEngineeringDesign 3.0 A+
			AssemblyLanguage 3.0 A+
			InternetProgramming 3.0 B0
			ApplicationProgramminginJava 3.0 A0
			SystemProgramming 3.0 B0
			OperatingSystem 3.0 B0
			WirelessCommunicationsandNetworking 3.0 C+
			LogicCircuits 3.0 B0
			DataStructure 4.0 A+
			MicroprocessorApplication 3.0 B+
			EmbeddedSoftware 3.0 C0
			ComputerSecurity 3.0 D+
			Database 3.0 C+
			Algorithm 3.0 B0
			CapstoneDesigninCSE 3.0 B+
			CompilerDesign 3.0 D0
			ProblemSolving 4.0 P
		`;
		const expected = 3.284483;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 4);
	});

	it('예제 입력 2', () => {
		const input = `
			BruteForce 3.0 F
			Greedy 1.0 F
			DivideandConquer 2.0 F
			DynamicProgramming 3.0 F
			DepthFirstSearch 4.0 F
			BreadthFirstSearch 3.0 F
			ShortestPath 4.0 F
			DisjointSet 2.0 F
			MinimumSpanningTree 2.0 F
			TopologicalSorting 1.0 F
			LeastCommonAncestor 2.0 F
			SegmentTree 4.0 F
			EulerTourTechnique 3.0 F
			StronglyConnectedComponent 2.0 F
			BipartiteMatching 2.0 F
			MaximumFlowProblem 3.0 F
			SuffixArray 1.0 F
			HeavyLightDecomposition 4.0 F
			CentroidDecomposition 3.0 F
			SplayTree 1.0 F
		`;
		const expected = 0.0;

		expect(parseFloat(solution(input))).toBeCloseTo(expected, 4);
	});
});
