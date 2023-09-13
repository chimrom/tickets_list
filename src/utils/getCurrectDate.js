export const getCurrentDate = (date) => {
	const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	const months = [
		'янв',
		'февр',
		'март',
		'апр',
		'май',
		'июнь',
		'июль',
		'авг',
		'сент',
		'окт',
		'нояб',
		'дек',
	];
	const dateString = date;
	const dateParts = dateString.split('.');
	const day = parseInt(dateParts[0], 10);
	const month = parseInt(dateParts[1], 10) - 1;
	const year = '20' + parseInt(dateParts[2], 10);

	const newDate = new Date(year, month, day);

	const currectDate = {
		day: newDate.getDay(),
		dayOfWeek: days[newDate.getDay()],
		month: months[newDate.getMonth()],
		year: newDate.getFullYear(),
	};

	return currectDate;
};
