import { parseISO } from 'date-fns'

/**
 * @param {string} dateString Expected format: "YYYY-MM-DD" or "YYYY-MM-DD HH:MM:SS"
 * @returns Date
 */
const getDateFromSupposedUTCDate = (dateString) => {
  return parseISO(`${dateString}+00:00`);
  // or
  // return parseISO(`${dateString}Z`);
};

export default getDateFromSupposedUTCDate();
