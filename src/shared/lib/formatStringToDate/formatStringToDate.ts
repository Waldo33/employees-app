export const formatStringToDate = (str: string): Date => {
    const [date, month, year] = str.split('.');
    return new Date(`${month} ${date} ${year}`);
};
