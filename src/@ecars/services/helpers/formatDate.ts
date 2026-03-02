import {shortMonths} from '@ecars/constants/date';

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('T')[0].split('-');
  return `${shortMonths[parseInt(month, 10) - 1]} ${String(parseInt(day, 10))}, ${year}`;
};
