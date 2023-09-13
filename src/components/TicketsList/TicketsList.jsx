import { TicketsListItem } from "./components/TicketsListItem";
import { sortedByDate } from "../../utils/sortedByDate";

export const TicketsList = ({
    tickets,
    selected,
    currencyRate,
    currentCurrency,
}) => {
    const filteredTickets = tickets.filter((el) =>
        selected.includes(el.stops.toString())
    );

    if (!!filteredTickets.length) {
        return (
            <section className="flex flex-col gap-5 ">
                {filteredTickets.sort(sortedByDate).map((ticket, index) => {
                    return (
                        <TicketsListItem
                            key={index}
                            ticket={ticket}
                            currencyRate={currencyRate}
                            currentCurrency={currentCurrency}
                        />
                    );
                })}
            </section>
        );
    } else {
        return (
            <div className="w-full max-w-3xl text-center">
                Ничего не найдено
            </div>
        );
    }
};
