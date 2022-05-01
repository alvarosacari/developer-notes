/**
 * @param {string} dateString Expected format: "YYYY-MM-DD" or "YYYY-MM-DD HH:MM:SS"
 * @returns Date
 */
const getDateFromSupposedUTCDate = (dateString) => {
  const createdAtUTC = dateString.replace(/-/g, "/"); // this is for safari browser compatibility
  return new Date(`${createdAtUTC} UTC`);
};

export default getDateFromSupposedUTCDate;
