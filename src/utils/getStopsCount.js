export const getStopsCount = (data) => {
	const count = data.map((ticket) => {
		return ticket.stops;
	});
	const sortedCount = count.sort(function (a, b) {
		return a - b;
	});

	let set = new Set(sortedCount);
	const arrayString = Array.from(set);
	return arrayString.map((el) => el.toString());
};
