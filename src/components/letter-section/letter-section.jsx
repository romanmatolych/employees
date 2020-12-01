import React from 'react';

import * as styles from './letter-section.module.css';
import User from '../user/user';

const LetterSection = ({ letter, users, onUserCheck }) => (
  <div className={styles.letterSection}>
    <div className={styles.header}>{letter}</div>
    {users.length
      ? users
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(user => <User key={user.id} user={user} onChange={onUserCheck} />)
      : '—'}
  </div>
);

export default LetterSection;
