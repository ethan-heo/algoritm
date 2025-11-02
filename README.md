# Algorithm Practice

백준 온라인 저지 및 알고리즘 문제 풀이를 위한 JavaScript 환경입니다.

## 프로젝트 구조

```
algorithm/
├── problems/          # 문제 풀이
│   ├── boj-1000/     # 백준 1000번
│   │   ├── boj-1000.js
│   │   └── boj-1000.test.js
│   └── two-sum/      # 일반 알고리즘
│       ├── two-sum.js
│       └── two-sum.test.js
├── scripts/          # 자동화 스크립트
│   └── create-problem.js
└── templates/        # 문제 템플릿
    ├── baekjoon-template.js
    └── baekjoon-template.test.js
```

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 테스트 실행

```bash
pnpm test              # watch 모드
pnpm test:run          # 1회 실행
pnpm test:ui           # UI 모드
```

### 코드 포맷팅

```bash
pnpm format        # 포맷팅 적용
pnpm format:check  # 포맷팅 체크
```

### 새 문제 생성

```bash
pnpm new <문제번호> [문제제목]
# 예: pnpm new 1000 "A+B"
```

## 백준 문제 풀이

### 1. 새 문제 시작하기

**방법 1: 자동 생성 스크립트 사용 (권장)**

```bash
# 문제번호만 입력
pnpm new 1000

# 문제번호와 제목 입력
pnpm new 1000 "A+B"
```

스크립트가 자동으로:
- `problems/boj-{번호}/` 디렉토리 생성
- 솔루션 파일 생성 (문제 번호와 제목 포함)
- 테스트 파일 생성
- 다음 단계 안내

**방법 2: 수동 생성**

```bash
# 문제 디렉토리 생성 (예: 백준 1000번)
mkdir -p problems/boj-1000

# 템플릿 복사
cp templates/baekjoon-template.js problems/boj-1000/boj-1000.js
cp templates/baekjoon-template.test.js problems/boj-1000/boj-1000.test.js
```

### 2. 문제 풀이 작성

`problems/boj-1000/boj-1000.js`:

```javascript
function solution(input) {
	// 입력 처리
	const [a, b] = input.split(' ').map(Number);

	// 문제 풀이
	return a + b;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

### 3. 테스트 작성

`problems/boj-1000/boj-1000.test.js`:

```javascript
import { describe, it, expect } from 'vitest';
const { solution } = require('./boj-1000.js');

describe('백준 1000 - A+B', () => {
	it('예제 입력 1', () => {
		const input = `1 2`;
		expect(solution(input)).toBe(3);
	});
});
```

**참고**: 테스트 파일에서는 vitest를 `import`로, 솔루션을 `require`로 가져옵니다.

### 4. 테스트 실행

```bash
pnpm test
```

### 5. 백준 제출

문제를 풀고 테스트가 통과하면, 작성한 코드를 그대로 백준에 제출하면 됩니다.

**제출용 코드 예시** (boj-1000.js 전체):

```javascript
function solution(input) {
	const [a, b] = input.split(' ').map(Number);
	return a + b;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

**주요 포인트**:
- `require.main === module`을 사용하여 백준 제출 시에만 코드가 실행됩니다
- 로컬 테스트에서는 `require`로 함수만 가져오므로 실행 코드가 동작하지 않습니다
- `fs` 모듈은 제출용 코드 블록 내에서만 로드되어 테스트 시 부작용을 방지합니다
- `fs.readFileSync(0, 'utf-8')`는 파일 디스크립터 0(표준 입력)을 직접 읽습니다
- 백준과 로컬 모두에서 정상적으로 작동합니다

## 입력 처리 가이드

백준 문제에서 자주 사용하는 입력 처리 패턴입니다.

### 1. 한 줄 입력 - 숫자 하나

```javascript
function solution(input) {
	const n = parseInt(input);
	// 문제 풀이...
	return result;
}

module.exports = { solution };

if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

### 2. 한 줄 입력 - 공백으로 구분된 숫자들

```javascript
function solution(input) {
	const [a, b] = input.split(' ').map(Number);
	// 문제 풀이...
	return result;
}

module.exports = { solution };

if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

### 3. 여러 줄 입력 - 개행 문자로 구분

```javascript
function solution(input) {
	const lines = input.split('\n');
	const n = parseInt(lines[0]);
	const arr = lines[1].split(' ').map(Number);
	// 문제 풀이...
	return result;
}

module.exports = { solution };

if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

### 4. 여러 테스트 케이스

```javascript
function solution(input) {
	const lines = input.split('\n');
	const t = parseInt(lines[0]);
	const results = [];
	for (let i = 1; i <= t; i++) {
		const [a, b] = lines[i].split(' ').map(Number);
		// 처리...
		results.push(a + b);
	}
	return results.join('\n');
}

module.exports = { solution };

if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
```

## 기술 스택

- **Runtime**: Node.js
- **Package Manager**: pnpm
- **Language**: JavaScript (CommonJS)
- **Testing**: Vitest
- **Formatting**: Prettier + EditorConfig
- **Indent**: Tab (size 2)

## 문제 풀이 팁

1. 백준 문제는 `problems/boj-숫자/` 형식으로 디렉토리 생성
2. 일반 알고리즘 연습은 `problems/문제명/` 형식으로 디렉토리 생성
3. 각 문제는 독립적인 디렉토리에서 코드와 테스트를 함께 관리
4. 테스트를 먼저 작성하고 문제를 푸는 TDD 방식 권장
