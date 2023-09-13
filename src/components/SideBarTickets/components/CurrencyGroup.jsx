export const CurrencyGroup = ({
    currency,
    currentCurrency,
    setCurrentCurrency,
}) => {
    const handleChangeCurrency = (event) => {
        const { id } = event.target;
        setCurrentCurrency(id);
    };

    return (
        <div className="inline-flex rounded-md  mb-6 p-4" role="group">
            {currency.map((item) => {
                return (
                    <button
                        type="button"
                        key={item}
                        id={item}
                        onClick={(event) => handleChangeCurrency(event)}
                        className={`px-4 py-2 text-sm font-medium text-blue-400 bg-white border  rounded-md hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500 focus:z-10  focus:bg-blue-400 focus:text-white ${
                            currentCurrency === item
                                ? "bg-blue-400 text-white"
                                : ""
                        }  `}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};
