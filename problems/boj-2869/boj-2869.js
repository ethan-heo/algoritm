/**
 * 백준 2869번 - 달팽이는 올라가고 싶다
 * https://www.acmicpc.net/problem/2869
 */
function solution(input) {
	let [up, down, distance] = input.split(' ').map(Number);

	// 첫날에 도착하는 경우
	if (distance <= up) {
		return '1';
	}

	// 마지막 날을 제외하고 올라가야 하는 거리
	const remainingDistance = distance - up;
	// 하루에 실질적으로 올라가는 거리 (up - down)
	const dailyProgress = up - down;
	// 마지막 날을 제외한 일수 (올림)
	const days = Math.ceil(remainingDistance / dailyProgress);
	// 전체 일수 = 마지막 날을 제외한 일수 + 마지막 날
	const result = days + 1;

	return `${result}`;
}

module.exports = { solution };

// 백준 제출용 코드 (로컬에서는 실행되지 않음)
if (require.main === module) {
	const fs = require('fs');
	const input = fs.readFileSync(0, 'utf-8').trim();
	const result = solution(input);
	console.log(result);
}
