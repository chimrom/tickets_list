export const dateParted = (date) => {
    const dateString = date;
    const dateParts = dateString.split(".");
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = "20" + parseInt(dateParts[2], 10);

    return { year, month, day };
};

export const timeParted = (time) => {
    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    return { hours, minutes };
};

export const getCurrentDate = (date) => {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const months = [
        "янв",
        "февр",
        "март",
        "апр",
        "май",
        "июнь",
        "июль",
        "авг",
        "сент",
        "окт",
        "нояб",
        "дек",
    ];

    const { year, month, day } = dateParted(date);

    const newDate = new Date(year, month, day);

    const currectDate = {
        day: newDate.getDay(),
        dayOfWeek: days[newDate.getDay()],
        month: months[newDate.getMonth()],
        year: newDate.getFullYear(),
    };

    return currectDate;
};
