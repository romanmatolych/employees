import React from 'react';

import { MONTH_NAMES } from '../../constants';
import * as styles from './month-group.module.css';

const MonthGroup = ({ monthName, users }) => {
  return (
    <div className={styles.monthGroup}>
      <div className={styles.header}>{monthName}</div>
      <ul>
        {users
          .sort((a, b) => Date.parse(a.dob) - Date.parse(b.dob))
          .map(user => <li key={user.id}>{user.lastName} {user.firstName} - {formatUserDOB(user.dob)}</li>)}
      </ul>
    </div>
  );
};

const formatUserDOB = dateString => {
  const date = new Date(dateString);
  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}, ${date.getFullYear()} year`;
}

export default MonthGroup;
