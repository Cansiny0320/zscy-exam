import dayjs from "dayjs";

export const now = () => dayjs();
export const interval = (date1, date2) =>
  dayjs(date2).diff(dayjs(date1), "day");
