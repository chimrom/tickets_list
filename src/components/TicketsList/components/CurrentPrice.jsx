export const CurrentPrice = ({ price, currencyRate, currentCurrency }) => {
    const loca = price.toLocaleString("ru-RU");
    let simbol = "₽";
    switch (currentCurrency) {
        case "USD":
            simbol = "$";
            break;

        case "EUR":
            simbol = "€";
            break;

        default:
            simbol = "₽";
            break;
    }
    return <> {simbol}</>;
};
