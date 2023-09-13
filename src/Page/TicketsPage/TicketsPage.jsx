import { useState, useEffect } from "react";
import axios from "axios";
import { SideBarTickets } from "../../components/SideBarTickets/SideBarTickets";
import { TicketsList } from "../../components/TicketsList/TicketsList";
import { getStopsCount } from "../../utils/getStopsCount";
import data from "../../tickets.json";

const currency = ["RUB", "USD", "EUR"];

export const TicketsPage = () => {
    const [tickets, setTickets] = useState([]);
    const [currentCurrency, setCurrentCurrency] = useState(currency[0]);
    const [currencyRate, setCurrencyRate] = useState({
        RUB: 1,
        USD: 1,
        EUR: 1,
    });
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
        async function getCurrencyRate() {
            try {
                const { data } = await axios.get(
                    "https://www.cbr-xml-daily.ru/daily_json.js"
                );
                setCurrencyRate({
                    ...currencyRate,
                    USD: data?.valute?.USD.value,
                    EUR: data?.valute?.EUR.value,
                });
            } catch (error) {
                console.log(error);
            }
        }
        getTicket();
        getCurrencyRate();
    }, []);

    return (
        <main className="container flex gap-5 mt-20  justify-center ">
            <SideBarTickets
                currency={currency}
                stopsCount={stopsCount}
                selected={selectedStop}
                setSelected={setSelectedStop}
                currentCurrency={currentCurrency}
                setCurrentCurrency={setCurrentCurrency}
            />
            <TicketsList
                tickets={tickets}
                selected={selectedStop}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
            />
        </main>
    );
};
