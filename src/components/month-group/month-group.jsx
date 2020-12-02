import React from 'react';

import { formatUsersDOB } from '../../utils/users-utils';
import * as styles from './month-group.module.css';

const MonthGroup = ({ monthName, users }) => {
  const userList = users
    .slice()
    // ascending sorting by the date of the birthday in the current month
    .sort((firstUser, secondUser) => Date.parse(firstUser.dob) - Date.parse(secondUser.dob))
    .map(({ id, lastName, firstName, dob }) => (
      <li key={id}>
        {lastName} {firstName} - {formatUsersDOB(dob)}
      </li>
    ));

  return (
    <div className={styles.monthGroup}>
      <div className={styles.header}>{monthName}</div>
      <ul>{userList}</ul>
    </div>
  );
};

export default MonthGroup;
