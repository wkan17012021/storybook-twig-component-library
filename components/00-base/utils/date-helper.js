// This utility fn for handling date parsing and formatting between
// UNIX timestamp and human-readable format dd/mm/yyyy
// https://storybook.js.org/docs/essentials/controls

import {DateTime} from 'luxon';

export const formatDate = (rawDate) => {
  if (!rawDate) {
    return '';
  }
  let dateObject;
  try {
    dateObject = DateTime.fromISO(new Date(rawDate).toISOString());
  } catch (error) {
    console.error('Error parsing date:', error);
    dateObject = DateTime.now(); // Fallback to current date if parsing fails
  }
  const datetime = dateObject.toISODate(); // ISO format for datetime attribute
  const formattedDate = dateObject.toFormat('dd/MM/yyyy'); // Human-readable format

  return {datetime, formattedDate};
};
