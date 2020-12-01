import React from 'react';

import * as styles from './user.module.css';

const User = ({ user, onChange }) => (
  <div>
    <span className={styles.fullName}>{user.lastName} {user.firstName}</span>
    <input type="checkbox" onChange={(e) => onChange(user.id, e)} checked={user.checked} />
  </div>
);

export default User;
