import moment from 'moment';

export const formattedDate = (val) => {
  return moment(val, 'DD-MM-YYYY').format('DD-MM-YYYY');
};

export const formattedTime = (val) => {
  return moment(val, 'hh:mm:ss A').format('hh:mm:ss A');
};

export const convertDate = (date, newFormat) => {
  const fm = newFormat || 'YYYY-MM-DD';

  return date ? moment(date).format(fm) : '';
};

export const fullDate = () => {
  // Get the current date
  const currentDate = moment();

  // Format the start and end dates for the same day
  const sameDayDateRange = {
    startYear: currentDate?.year(),
    startMonth: currentDate?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    startDay: currentDate?.date(),
    endYear: currentDate?.year(),
    endMonth: currentDate?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    endDay: currentDate?.date(),
  };

  // Calculate the start of the week (Sunday) as 6 days before the current date
  const startDate = currentDate.clone().subtract(6, 'days');

  // Format the start and end dates for the week
  const weeklyDate = {
    startYear: startDate?.year(),
    startMonth: startDate?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    startDay: startDate?.date(),
    endYear: currentDate?.year(),
    endMonth: currentDate?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    endDay: currentDate?.date(),
  };

  // Default to full date range
  // Define the start month and day
  const startMonth = 1; // January
  const startDay = 1;

  // Define the end month and day
  const endMonth = currentDate?.month() + 1; // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
  const endDay = currentDate?.date();

  // Define the end year
  const endYear = currentDate?.year();

  // Create Moment.js objects for start and end dates
  const startDateOfYear = moment({ year: endYear, month: startMonth - 1, day: startDay }); // Adjust month to be zero-based
  const endDateOfYear = moment({ year: endYear, month: endMonth - 1, day: endDay }); // Adjust month to be zero-based

  // Construct the full year date range object
  const fullYear = {
    startYear: startDateOfYear?.year(),
    startMonth: startDateOfYear?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    startDay: startDateOfYear?.date(),
    endYear: endDateOfYear?.year(),
    endMonth: endDateOfYear?.month() + 1, // Adding 1 to adjust to human-readable month (Moment.js is zero-based)
    endDay: endDateOfYear?.date(),
  };

  // Return all date ranges as properties of a single object
  return {
    sameDayDateRange,
    weeklyDate,
    fullYear,
  };
};
