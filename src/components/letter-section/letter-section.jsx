import React from 'react';

import * as styles from './letter-section.module.css';
import User from '../user/user';

const LetterSection = ({ letter, users, onUserCheck }) => {
  const userList = users
    .slice()
    .sort((firstUser, secondUser) => firstUser.lastName.localeCompare(secondUser.lastName))
    .map((user) => <User key={user.id} user={user} onChange={onUserCheck} />);

  return (
    <div className={styles.letterSection}>
      <div className={styles.header}>{letter}</div>
      {userList.length ? userList : '—'}
    </div>
  );
};

export default LetterSection;
