#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// CLI 인자 파싱
const args = process.argv.slice(2);

if (args.length === 0) {
	console.error('사용법: pnpm new <문제번호> [문제제목]');
	console.error('예시: pnpm new 1000 "A+B"');
	console.error('예시: pnpm new 2557');
	process.exit(1);
}

const problemNumber = args[0];
const problemTitle = args.slice(1).join(' ') || '문제 제목';
const problemId = `boj-${problemNumber}`;
const problemDir = path.join(__dirname, '..', 'problems', problemId);

// 이미 존재하는지 확인
if (fs.existsSync(problemDir)) {
	console.error(`❌ 이미 존재하는 문제입니다: ${problemId}`);
	process.exit(1);
}

// 디렉토리 생성
fs.mkdirSync(problemDir, { recursive: true });
console.log(`📁 디렉토리 생성: problems/${problemId}/`);

// 솔루션 파일 생성
const solutionContent = `/**
 * 백준 ${problemNumber}번 - ${problemTitle}
 * https://www.acmicpc.net/problem/${problemNumber}
 */
function solution(input) {
	// 입력 처리 예시:

	// 1. 한 줄 입력 - 숫자 하나
	// const n = parseInt(input);

	// 2. 한 줄 입력 - 공백으로 구분된 숫자들
	// const [a, b] = input.split(' ').map(Number);

	// 3. 여러 줄 입력 - 개행 문자로 구분
	// const lines = input.split('\\n');
	// const n = parseInt(lines[0]);
	// const arr = lines[1].split(' ').map(Number);

	// 4. 여러 테스트 케이스
	// const lines = input.split('\\n');
	// const t = parseInt(lines[0]);
	// for (let i = 1; i <= t; i++) {
	//   const [a, b] = lines[i].split(' ').map(Number);
	// }

	// 여기에 문제 풀이 작성

	return ''; // 결과 반환
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
`;

const solutionFile = path.join(problemDir, `${problemId}.js`);
fs.writeFileSync(solutionFile, solutionContent);
console.log(`✅ 솔루션 파일 생성: ${problemId}.js`);

// 테스트 파일 생성
const testContent = `import { describe, it, expect } from 'vitest';
const { solution } = require('./${problemId}.js');

describe('백준 ${problemNumber} - ${problemTitle}', () => {
	it('예제 입력 1', () => {
		const input = \`\`;
		const expected = \`\`;

		expect(solution(input)).toBe(expected);
	});

	it('예제 입력 2', () => {
		const input = \`\`;
		const expected = \`\`;

		expect(solution(input)).toBe(expected);
	});
});
`;

const testFile = path.join(problemDir, `${problemId}.test.js`);
fs.writeFileSync(testFile, testContent);
console.log(`✅ 테스트 파일 생성: ${problemId}.test.js`);

console.log('');
console.log('🎉 문제 템플릿 생성 완료!');
console.log('');
console.log('다음 단계:');
console.log(`1. 문제 확인: https://www.acmicpc.net/problem/${problemNumber}`);
console.log(`2. 솔루션 작성: problems/${problemId}/${problemId}.js`);
console.log(`3. 테스트 작성: problems/${problemId}/${problemId}.test.js`);
console.log(`4. 테스트 실행: pnpm test`);
console.log(`5. 직접 실행: echo "입력" | node problems/${problemId}/${problemId}.js`);
