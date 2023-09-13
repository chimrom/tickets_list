import { getCurrentDate } from '../../../utils/getCurrectDate';

export const DestinationPlace = ({ time, destination, name, date }) => {
	const currentDate = getCurrentDate(date);
	return (
		<div className="flex flex-col text-gray-600 ">
			<span className="text-4xl">{time}</span>
			<div>
				{destination}, {name}
			</div>
			<div className="text-gray-400">
				{currentDate.day} {currentDate.month} {currentDate.year},{' '}
				{currentDate.dayOfWeek}
			</div>
		</div>
	);
};
