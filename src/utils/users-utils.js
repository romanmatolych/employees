import { MONTH_NAMES } from '../constants';

/**
 * Returns an aggregated object of users by the names of their birthday month
 * @param {Object[]} users
 */
export const groupUsersByBirthdayMonths = (users) =>
  MONTH_NAMES.reduce((acc, curr, index) => {
    const birthdayGuys = users.filter((user) => new Date(user.dob).getUTCMonth() === index);
    acc[curr] = birthdayGuys;
    return acc;
  }, {});

/**
 * Returns formatted date string. Example: '30 September, 2019 year'
 * @param {string} dateString UTC datetime
 */
export const formatUsersDOB = (dateString) => {
  const date = new Date(dateString);
  return `${date.getUTCDate()} ${MONTH_NAMES[date.getUTCMonth()]}, ${date.getUTCFullYear()} year`;
};
