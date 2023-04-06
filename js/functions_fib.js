'use strict';

// Задача на числа Фибоначчи

function fib(n) {
	let result = '';

	if (Number.isInteger(n) && n > 0) {
		let a = 1;
		let b = 0;
		let sum = 0;
		result = '0';

		for (let i = 2; i <= n; i++) {
			sum = a + b;
			result += ` ${sum}`;
			a = b;
			b = sum;
		}
	}

	return result;
}

console.log(fib(10));