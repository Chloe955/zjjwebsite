import { format } from 'date-fns';

export function formatDate(dateString: string) {
  return format(new Date(dateString), 'MMM dd, yyyy');
}
