import { format } from "date-fns";

/**
 *
 * @param {Date} date
 * @param {String} formatString
 *                 Possible formats: http://date-fns.org/v1.29.0/docs/format
 *                 Examples:
 *                   'yyyy-MM-dd HH:mm:ss': '2022-01-11 09:07:01' '2022-11-01 19:30:55'
 *                   'H:mm dd/MM/yyyy':     '8:08 05/01/2022'  '16:25 05/11/2022'
 *                   'HH:mm dd/MM/yyyy':    '08:08 05/04/2022' '16:25 05/11/2022'
 *                   'dd/MM/yy H:mm':       '26/04/22 9:30'    '26/04/22 19:30'
 *                   'dd/MM/yy K:mm aaa':   '26/04/22 9:30 am' '26/04/22 6:30 pm'
 * @returns String
 */
const formatDate = (date, formatString) => {
  return format(date, formatString);
};

export default formatDate;
