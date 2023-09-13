import { DestinationPlace } from "./DestinationPlace";
import { Stops } from "./Stops";
import { CarrierLogo } from "./CarrierLogo";
import { CurrentPrice } from "./CurrentPrice";
export const TicketsListItem = ({ ticket, currencyRate, currentCurrency }) => {
    return (
        <div className="flex bg-white border w-full max-w-3xl rounded ">
            <div className="flex flex-col justify-between p-4 items-center border-r">
                <div className="mb-2 ">
                    <CarrierLogo carrier={ticket.carrier} />
                </div>
                <button className="bg-orange-500 text-white rounded px-10 py-1 hover:opacity-90">
                    Купить <br /> за
                    <CurrentPrice
                        price={ticket.price}
                        currencyRate={currencyRate}
                        currentCurrency={currentCurrency}
                    />
                </button>
            </div>
            <div className="flex justify-between py-6 px-8 w-full">
                <DestinationPlace
                    version="1"
                    time={ticket.departure_time}
                    destination={ticket.origin}
                    name={ticket.origin_name}
                    date={ticket.departure_date}
                />
                <Stops stops={ticket.stops} />

                <DestinationPlace
                    version="2"
                    time={ticket.arrival_time}
                    destination={ticket.destination}
                    name={ticket.destination_name}
                    date={ticket.arrival_date}
                />
            </div>
        </div>
    );
};
