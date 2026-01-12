import { describe, it, expect } from 'vitest';
const { solution, createDequeue } = require('./boj-2346.js');

describe('백준 2346 - 풍선 터트리기', () => {
	it('예제 입력 1', () => {
		const input = `
			5
			3 2 1 -3 -1
		`;
		const expected = `1 4 5 3 2`;

		expect(solution(input)).toBe(expected);
	});
});

describe('createDequeue - rotate 메서드', () => {
	it('빈 dequeue에서 rotate를 호출해도 에러가 발생하지 않는다', () => {
		const dq = createDequeue();

		expect(() => dq.rotate(1)).not.toThrow();
		expect(() => dq.rotate(-1)).not.toThrow();
		expect(dq.size()).toBe(0);
	});

	it('단일 요소에 대해 rotate를 호출해도 상태가 유지된다', () => {
		const dq = createDequeue();
		dq.addLast(10);

		dq.rotate(1);

		expect(dq.size()).toBe(1);
		expect(dq.showFirst()).toBe(10);
		expect(dq.showLast()).toBe(10);
	});

	it('여러 요소에 대해 rotate를 호출할 수 있다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);
		dq.addLast(3);
		dq.addLast(4);
		dq.addLast(5);

		expect(dq.size()).toBe(5);

		// rotate 호출 후에도 크기는 유지되어야 함
		dq.rotate(2);

		expect(dq.size()).toBe(5);
	});

	it('음수 count로 rotate를 호출할 수 있다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);
		dq.addLast(3);

		expect(() => dq.rotate(-1)).not.toThrow();
		expect(dq.size()).toBe(3);
	});

	it('0으로 rotate를 호출할 수 있다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);

		dq.rotate(0);

		expect(dq.size()).toBe(2);
		expect(dq.showFirst()).toBe(1);
		expect(dq.showLast()).toBe(2);
	});

	it('양수 count로 rotate하면 요소들이 오른쪽으로 회전한다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);
		dq.addLast(3);
		dq.addLast(4);
		dq.addLast(5);

		// [1, 2, 3, 4, 5]에서 count=2로 rotate
		dq.rotate(2);

		// 회전 후 순서 확인
		expect(dq.removeFirst()).toBe(4);
		expect(dq.removeFirst()).toBe(5);
		expect(dq.removeFirst()).toBe(1);
		expect(dq.removeFirst()).toBe(2);
		expect(dq.removeFirst()).toBe(3);
		expect(dq.size()).toBe(0);
	});

	it('음수 count로 rotate하면 요소들이 왼쪽으로 회전한다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);
		dq.addLast(3);
		dq.addLast(4);
		dq.addLast(5);

		// [1, 2, 3, 4, 5]에서 count=-2로 rotate
		dq.rotate(-2);

		// 회전 후 순서 확인
		expect(dq.removeFirst()).toBe(3);
		expect(dq.removeFirst()).toBe(4);
		expect(dq.removeFirst()).toBe(5);
		expect(dq.removeFirst()).toBe(1);
		expect(dq.removeFirst()).toBe(2);
		expect(dq.size()).toBe(0);
	});

	it('rotate 후 showFirst와 showLast가 변경된 순서를 반영한다', () => {
		const dq = createDequeue();
		dq.addLast(10);
		dq.addLast(20);
		dq.addLast(30);

		// 초기 상태 확인
		expect(dq.showFirst()).toBe(10);
		expect(dq.showLast()).toBe(30);

		// [10, 20, 30]에서 count=1로 rotate -> [30, 10, 20]
		dq.rotate(1);

		// 회전 후 첫번째와 마지막 요소 확인
		expect(dq.showFirst()).toBe(30);
		expect(dq.showLast()).toBe(20);
	});

	it('dequeue 크기만큼 rotate하면 원래 순서로 돌아온다', () => {
		const dq = createDequeue();
		dq.addLast(1);
		dq.addLast(2);
		dq.addLast(3);

		// 크기가 3이므로 3만큼 rotate하면 원래 순서
		dq.rotate(3);

		expect(dq.removeFirst()).toBe(1);
		expect(dq.removeFirst()).toBe(2);
		expect(dq.removeFirst()).toBe(3);
	});
});
