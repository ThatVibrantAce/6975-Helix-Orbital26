export const addMinutes = (iso: string, minutes: number): string => {
    const date = new Date(iso);
    date.setMinutes(date.getMinutes() + minutes);
    return date.toISOString();
};