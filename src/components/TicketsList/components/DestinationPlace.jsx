import { getCurrentDate } from "../../../utils/getCurrectDate";

export const DestinationPlace = ({
    time,
    destination,
    name,
    date,
    version,
}) => {
    const currentDate = getCurrentDate(date);
    return (
        <div className="flex flex-col text-gray-600 ">
            <span className="text-4xl">{time}</span>
            <div>
                {version === "2" ? (
                    <>
                        {name},{destination}
                    </>
                ) : (
                    <>
                        {destination}, {name}
                    </>
                )}
            </div>
            <div className="text-gray-400">
                {currentDate.day} {currentDate.month} {currentDate.year},{" "}
                {currentDate.dayOfWeek}
            </div>
        </div>
    );
};
