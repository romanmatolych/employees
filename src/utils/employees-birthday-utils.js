import { MONTH_NAMES } from '../constants';

export const groupUsersByBirthdayMonths = users =>
    MONTH_NAMES.reduce((acc, curr, index) => {
        const birthdayGuys = users.filter((emp) => new Date(emp.dob).getMonth() === index);
        acc[curr] = birthdayGuys;
        return acc;
    }, {});