import { useState, useEffect } from 'react';
import { SideBarTickets } from '../../components/SideBarTickets/SideBarTickets';
import { TicketsList } from '../../components/TicketsList/TicketsList';
import { getStopsCount } from '../../utils/getStopsCount';
import data from '../../tickets.json';

const currency = ['RUB', 'USD', 'EUR'];

export const TicketsPage = () => {
	const [tickets, setTickets] = useState([]);
	const stopsCount = getStopsCount(data.tickets);
	const [selectedStop, setSelectedStop] = useState([...stopsCount]);

	useEffect(() => {
		function getTicket() {
			try {
				setTickets(data.tickets);
			} catch (error) {
				console.log(error);
			}
		}
		getTicket();
	}, []);

	return (
		<main className="container flex gap-5 ">
			<SideBarTickets
				currency={currency}
				stopsCount={stopsCount}
				selected={selectedStop}
				setSelected={setSelectedStop}
			/>
			<TicketsList tickets={tickets} />
		</main>
	);
};
