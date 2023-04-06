'use strict';

// Продвинутые задания на использование функций

// Первая задача
function calculateVolumeAndArea(side) {
	if (Number.isInteger(side) && side > 0) {
		const area = 6 * Math.pow(side, 2);
		const volume = Math.pow(side, 3);
		return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
	} else {
		return 'При вычислении произошла ошибка';
	}
}

console.log(calculateVolumeAndArea(5));

// Вторая задача
function getCoupeNumber(num) {
	if (!Number.isInteger(num) || num < 0) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (num === 0 || num > 36) {
		return 'Таких мест в вагоне не существует';
	} else {
		return Math.ceil(num / 4);
	}
}

console.log(getCoupeNumber(30));

// Третья задача
function getTimeFromMinutes(mins) {
	let result = 'Ошибка, проверьте данные';

	if (Number.isInteger(mins) && mins >= 0) {
		const h = Math.floor(mins / 60);
		const m = mins % 60;
		let end = 'ов';
		const cond = h % 10;

		if (cond == 1) {
			end = '';
		} else if (cond >= 2 && cond <= 4) {
			end = 'а';
		}

		result = `Это ${h} час${end} и ${m} минут`;
	}

	return result;
}

console.log(getTimeFromMinutes(200));

// Четвертая задача
function findMaxNumber(a, b, c, d) {
	let result = 0;

	if (Number.isFinite(a) && Number.isFinite(b) && 
		Number.isFinite(c) && Number.isFinite(d)) {
		result = Math.max(a, b, c, d);
	}

	return result;
}

console.log(findMaxNumber(1, 5, 6.6, 10.5));

console.log(findMaxNumber(1, 5, '6', '10'));