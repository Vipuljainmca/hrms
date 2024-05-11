import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}
export function convertDate(date, newFormat) {
  const fm = newFormat || 'yyyy-MM-dd';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date, newFormat) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function formatDateInTime(date) {
  return format(date, 'HH:mm:ss aa');
}

export function weekfDate(date, newFormat) {
  const fm = newFormat || 'eee';

  return date ? format(new Date(date), fm) : '';
}

export function format12HourTime(dateString) {
  const date = new Date(dateString);
  return format(date, 'hh:mm:ss aa');
}

export function formatSeconds(seconds) {
  // Calculate the number of whole hours
  const hours = Math.floor(seconds / 3600);

  // Calculate the remaining seconds after extracting hours
  const remainingSeconds = seconds % 3600;

  // Calculate the number of whole minutes in the remaining seconds
  const minutes = Math.floor(remainingSeconds / 60);

  // Calculate the remaining seconds after extracting minutes
  // const finalSeconds = remainingSeconds % 60;

  // Prepare the formatted time string
  const formattedTime = `${hours}:${minutes} Min`;

  return formattedTime;
}
