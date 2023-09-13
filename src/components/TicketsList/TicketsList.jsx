import { TicketsListItem } from './components/TicketsListItem';

export const TicketsList = ({ tickets }) => {
	if (!!tickets.length) {
		return (
			<section className="flex flex-col gap-5 ">
				{tickets.map((ticket, index) => {
					return <TicketsListItem key={index} ticket={ticket} />;
				})}
			</section>
		);
	}
};
