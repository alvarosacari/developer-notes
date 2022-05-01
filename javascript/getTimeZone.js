/**
 * IANA time zone list https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @returns {String} ex: 'Europe/Paris'
 */

const getTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export default getTimeZone;
