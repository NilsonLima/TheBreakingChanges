import { parseISO, format } from 'date-fns';

export const formatDateString = (date = '') => format(parseISO(date, 'yyyy-MM-dd'), 'LLLL dd, Y');
