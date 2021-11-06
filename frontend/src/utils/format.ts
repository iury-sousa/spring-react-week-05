import { format } from 'date-fns';

export function round(value: number, precision: number) {
  const baseValue = 10;

  const multiplier = Math.pow(baseValue, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const SECOND = 60;
const MILLISECONDS = 1000;

export const formatLocalDate = (date: string, pattern: string) => {
  const dateTemp = new Date(date);
  const dateOnly = new Date(dateTemp.valueOf() + dateTemp.getTimezoneOffset() * SECOND * MILLISECONDS);
  return format(dateOnly, pattern);
};
