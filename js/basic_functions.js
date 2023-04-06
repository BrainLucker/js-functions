'use strict';

// Задание на работу с функциями

// Первая задача
function sayHello(name) {
	return `Привет, ${name}!`;
}

console.log(sayHello('Макс'));

// Вторая задача
function returnNeighboringNumbers(n) {
	return [n - 1, n, n + 1];
}

console.log(returnNeighboringNumbers(10));

// Третья задача
function getMathResult(base, n) {
	let result = base;
	
	if (typeof(n) === 'number' && n > 0) {
		for (let i = 2; i <= n; i++) {
			result += `---${base * i}`;
		}
	}

	return result;
}

console.log(getMathResult(5, 3));

console.log(getMathResult(3, 10));

console.log(getMathResult(10, 5));

console.log(getMathResult(10, '5'));

console.log(getMathResult(10, 0));

console.log(getMathResult(20, -5));